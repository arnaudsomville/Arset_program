// Récupère les transcripts YouTube de TOUTES les vidéos du catalogue via yt-dlp
// (sous-titres manuels ou auto, EN), les nettoie (cues "rolling" dédupliqués)
// et les écrit en Markdown dans resources/notes/transcripts/, en miroir du
// catalogue (une arborescence par `module.key`).
//
// Outil d'analyse uniquement — rien n'est embarqué dans les apps.
// Les sous-titres bruts (.vtt) sont téléchargés dans .raw/ (gitignoré).
//
// Prérequis : yt-dlp + un runtime JS (node) — voir `make install-tools`.
//
// Usage:
//   node scripts/fetch-transcripts.mjs [options]
//     --force            refetch même si le .md existe déjà
//     --limit N          ne traiter que N vidéos (dans l'ordre du catalogue)
//     --only id[,id...]  ne traiter que ces youtube_video_id
//     --concurrency N    parallélisme yt-dlp (défaut 4)
//     --lang en.*        langues de sous-titres (défaut "en.*")
//     --merge-words N    regroupe les segments jusqu'à N mots (défaut 18 ; --no-merge pour désactiver)
//     --rename-only      renomme les .md existants (retire le préfixe <video_id>-), sans refetch
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const catalogPath = path.join(repoRoot, "resources/catalog/video_catalog.json");
const outRoot = path.join(repoRoot, "resources/notes/transcripts");
const rawRoot = path.join(outRoot, ".raw");
const manifestPath = path.join(outRoot, "_manifest.json");

const args = process.argv.slice(2);
const force = args.includes("--force");
const renameOnly = args.includes("--rename-only");
const limit = getOpt("--limit", null);
const only = getOpt("--only", null);
const concurrency = Number(getOpt("--concurrency", "4"));
const subLangs = getOpt("--lang", "en.*");
const mergeWords = args.includes("--no-merge") ? 0 : Number(getOpt("--merge-words", "18"));

function getOpt(name, fallback) {
  const eq = args.find((a) => a.startsWith(name + "="));
  if (eq) return eq.slice(name.length + 1);
  const i = args.indexOf(name);
  if (i !== -1 && i + 1 < args.length && !args[i + 1].startsWith("--")) return args[i + 1];
  return fallback;
}

const decodeEntities = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const cleanLine = (line) =>
  decodeEntities(line.replace(/<[^>]*>/g, ""))
    .replace(/\s+/g, " ")
    .trim();

function parseTimestamp(ts) {
  const parts = ts.split(":").map((p) => parseFloat(p.replace(",", ".")));
  if (parts.some(Number.isNaN)) return null;
  return parts.reduce((acc, p) => acc * 60 + p, 0);
}

function formatTimestamp(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}

// Parse un fichier VTT en segments {start, text}.
function parseVtt(content) {
  const blocks = content.replace(/\r/g, "").split(/\n{2,}/);
  const segments = [];
  for (const block of blocks) {
    const lines = block.split("\n");
    const timingIdx = lines.findIndex((l) => l.includes("-->"));
    if (timingIdx === -1) continue;
    const start = parseTimestamp(lines[timingIdx].split("-->")[0].trim());
    if (start === null) continue;
    const text = lines
      .slice(timingIdx + 1)
      .map(cleanLine)
      .filter(Boolean)
      .join(" ");
    if (text) segments.push({ start, text });
  }
  return segments;
}

// Les sous-titres auto sont "rolling" : chaque cue répète la fin de la précédente.
// On ne garde que la partie nouvelle (recouvrement mot à mot).
function dedupeSegments(segments) {
  const out = [];
  let prevWords = [];
  for (const seg of segments) {
    const words = seg.text.split(/\s+/).filter(Boolean);
    if (!words.length) continue;
    const maxK = Math.min(prevWords.length, words.length);
    let overlap = 0;
    for (let k = maxK; k >= 1; k--) {
      if (
        prevWords.slice(prevWords.length - k).join(" ") === words.slice(0, k).join(" ")
      ) {
        overlap = k;
        break;
      }
    }
    if (overlap === words.length) {
      prevWords = words;
      continue;
    }
    const fresh = words.slice(overlap >= 2 ? overlap : 0);
    if (fresh.length) out.push({ start: seg.start, text: fresh.join(" ") });
    prevWords = words;
  }
  return out;
}

// Les sous-titres auto n'ont pas de ponctuation : on regroupe les segments
// jusqu'à ~N mots pour éviter les lignes coupées en plein milieu d'une phrase.
function mergeSegments(segments, targetWords) {
  if (!targetWords || targetWords <= 0) return segments;
  const out = [];
  let words = [];
  let start = null;
  for (const seg of segments) {
    if (start === null) start = seg.start;
    words.push(...seg.text.split(/\s+/).filter(Boolean));
    if (words.length >= targetWords) {
      out.push({ start, text: words.join(" ") });
      words = [];
      start = null;
    }
  }
  if (words.length) out.push({ start, text: words.join(" ") });
  return out;
}

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{ASCII}]/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120)
    .replace(/-+$/g, "");

// Calcule le chemin de sortie de chaque vidéo (nom = slug seul). En cas de
// collision de slug dans un même module, suffixe avec l'id YouTube.
function planOutputPaths(videos) {
  const counts = new Map();
  for (const v of videos) {
    const dir = v._module?.key ?? "_unassigned";
    const slug = slugify(v.name);
    if (!counts.has(dir)) counts.set(dir, new Map());
    const m = counts.get(dir);
    m.set(slug, (m.get(slug) || 0) + 1);
  }
  const plan = new Map();
  for (const v of videos) {
    const dir = v._module?.key ?? "_unassigned";
    const slug = slugify(v.name);
    const collides = counts.get(dir).get(slug) > 1;
    const name = `${slug}${collides ? "-" + v.youtube_video_id : ""}.md`;
    plan.set(v.youtube_video_id, {
      dir: path.join(outRoot, dir),
      file: path.join(outRoot, dir, name),
    });
  }
  return plan;
}

function findExistingFile(videoId, manifest) {
  const rel = manifest[videoId]?.path;
  if (rel) {
    const abs = path.join(repoRoot, rel);
    if (fs.existsSync(abs)) return abs;
  }
  const stack = [outRoot];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === ".raw") continue;
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(abs);
      else if (entry.name.startsWith(videoId + "-") && entry.name.endsWith(".md")) return abs;
    }
  }
  return null;
}

function run(cmd, cmdArgs) {
  return new Promise((resolve) => {
    const child = spawn(cmd, cmdArgs, { stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";
    child.stdout.on("data", () => {});
    child.stderr.on("data", (d) => (stderr += d.toString()));
    child.on("error", (e) => resolve({ code: -1, stderr: e.message }));
    child.on("close", (code) => resolve({ code, stderr }));
  });
}

async function fetchSubtitle(video) {
  const base = path.join(rawRoot, video.youtube_video_id);
  const cmdArgs = [
    "--skip-download",
    "--write-subs",
    "--write-auto-subs",
    "--sub-langs",
    subLangs,
    "--sub-format",
    "vtt",
    "--js-runtimes",
    "node",
    "--no-playlist",
    "--no-warnings",
    "--sleep-requests",
    "1",
    "-o",
    base,
    video.youtube_url,
  ];
  const { code } = await run("yt-dlp", cmdArgs);
  if (code !== 0) return null;
  const files = fs
    .readdirSync(rawRoot)
    .filter((f) => f.startsWith(video.youtube_video_id + ".") && f.endsWith(".vtt"));
  if (!files.length) return null;
  // Préfère une piste manuelle EN si plusieurs variantes existent.
  files.sort((a, b) => (a.endsWith(".en.vtt") ? -1 : b.endsWith(".en.vtt") ? 1 : 0));
  return path.join(rawRoot, files[0]);
}

function buildMarkdown(video, module, segments) {
  const lines = [];
  lines.push(`# ${video.name}`);
  lines.push("");
  const meta = [`\`${video.youtube_url}\``, `id ${video.id}`];
  if (video.duration_seconds) meta.push(formatTimestamp(video.duration_seconds));
  if (module) meta.push(`module ${module.id} — ${module.title}`);
  lines.push(meta.join(" · "));
  lines.push("");
  for (const seg of segments) lines.push(`[${formatTimestamp(seg.start)}] ${seg.text}`);
  lines.push("");
  return lines.join("\n");
}

function loadCatalog() {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  const modulesById = new Map(catalog.modules.map((m) => [m.id, m]));
  const seen = new Set();
  const videos = [];
  for (const v of catalog.videos) {
    if (!v.youtube_video_id || seen.has(v.youtube_video_id)) continue;
    seen.add(v.youtube_video_id);
    const moduleId = v.canonical_module_id ?? v.module_ids?.[0] ?? null;
    videos.push({ ...v, _module: moduleId != null ? modulesById.get(moduleId) ?? null : null });
  }
  return videos;
}

async function main() {
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : {};

  // Mode renommage : retire le préfixe <video_id>- des .md existants.
  if (renameOnly) {
    const plan = planOutputPaths(loadCatalog());
    let renamed = 0;
    for (const [videoId, target] of plan) {
      const existing = findExistingFile(videoId, manifest);
      if (!existing || existing === target.file) continue;
      fs.mkdirSync(target.dir, { recursive: true });
      fs.renameSync(existing, target.file);
      manifest[videoId] = {
        ...(manifest[videoId] || {}),
        path: path.relative(repoRoot, target.file),
      };
      renamed++;
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
    console.log(`✅ ${renamed} fichier(s) renommé(s) → ${path.relative(repoRoot, outRoot)}`);
    return;
  }

  if (limit) console.log(`→ limite : ${limit} vidéos`);

  fs.mkdirSync(rawRoot, { recursive: true });
  let videos = loadCatalog();
  if (only) {
    const ids = new Set(only.split(",").map((s) => s.trim()));
    videos = videos.filter((v) => ids.has(v.youtube_video_id));
  }
  if (limit) videos = videos.slice(0, Number(limit));
  console.log(`→ ${videos.length} vidéo(s) à traiter (langues : ${subLangs})`);

  const plan = planOutputPaths(videos);
  let done = 0;
  let ok = 0;
  const failures = [];
  const queue = [...videos];

  async function worker() {
    while (queue.length) {
      const video = queue.shift();
      done++;
      const prefix = `[${done}/${videos.length}] ${video.youtube_video_id}`;
      try {
        const { dir: outDir, file: outFile } = plan.get(video.youtube_video_id);

        if (!force && fs.existsSync(outFile)) {
          manifest[video.youtube_video_id] = {
            ...(manifest[video.youtube_video_id] || {}),
            status: "skipped",
            path: path.relative(repoRoot, outFile),
          };
          console.log(`${prefix} · déjà présent`);
          continue;
        }

        const vttPath = await fetchSubtitle(video);
        if (!vttPath) throw new Error("aucun sous-titre EN disponible");

        const segments = mergeSegments(
          dedupeSegments(parseVtt(fs.readFileSync(vttPath, "utf8"))),
          mergeWords,
        );
        if (!segments.length) throw new Error("segments vides après nettoyage");

        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(outFile, buildMarkdown(video, video._module, segments));
        const chars = segments.reduce((n, s) => n + s.text.length, 0);
        manifest[video.youtube_video_id] = {
          status: "ok",
          path: path.relative(repoRoot, outFile),
          chars,
          segments: segments.length,
          source: path.basename(vttPath),
          fetched_at: new Date().toISOString(),
        };
        ok++;
        console.log(`${prefix} · ${segments.length} segments · ${chars} car.`);
      } catch (e) {
        failures.push(`${video.youtube_video_id}: ${e.message}`);
        manifest[video.youtube_video_id] = {
          status: "failed",
          error: e.message,
          fetched_at: new Date().toISOString(),
        };
        console.log(`${prefix} · ❌ ${e.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, worker));

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\n✅ ${ok}/${videos.length} transcripts écrits → ${path.relative(repoRoot, outRoot)}`);
  console.log(`   manifest : ${path.relative(repoRoot, manifestPath)}`);
  if (failures.length) {
    console.log(`\n⚠️  ${failures.length} échec(s) :`);
    for (const f of failures) console.log(`   - ${f}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
