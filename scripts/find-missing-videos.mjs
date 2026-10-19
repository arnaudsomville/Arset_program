// Recherche les vidéos manquantes des modules `partial` / `upcoming` sur YouTube.
//
// Mode report (défaut) : cherche chaque training et écrit un rapport de candidats.
// Mode apply : ajoute au catalogue les vidéos listées dans un fichier d'ajouts
//              (`--additions <json>`), puis met à jour le statut des modules.
//
// Usage :
//   node scripts/find-missing-videos.mjs --report [--limit N] [--only key]
//   node scripts/find-missing-videos.mjs --apply --additions /tmp/additions.json
//
// Le fichier d'ajouts est un objet : { "<module key>": [{ "youtube_video_id": "...", "name": "..." }] }
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);

function loadPlaywright() {
  try {
    return require("playwright");
  } catch {
    /* fallthrough */
  }
  const candidates = [
    process.env.PLAYWRIGHT_DIR,
    path.join(process.env.HOME || "", ".opencode/skills/playwright-skill"),
  ].filter(Boolean);
  for (const dir of candidates) {
    try {
      return require(path.join(dir, "node_modules", "playwright"));
    } catch {
      /* try next */
    }
  }
  throw new Error("playwright introuvable (npm i -D playwright, ou PLAYWRIGHT_DIR=...)");
}

const { chromium } = loadPlaywright();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const catalogPath = path.join(repoRoot, "resources/catalog/video_catalog.json");
const taxonomyPath = path.join(repoRoot, "resources/catalog/arset_taxonomy.json");
const linksPath = path.join(repoRoot, "resources/catalog/arset_training_links.json");
const reportPath = path.join(repoRoot, "resources/catalog/missing_candidates.json");

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const limit = getOpt("--limit", null);
const only = getOpt("--only", null);
const additionsPath = getOpt("--additions", null);

function getOpt(name, fallback) {
  const eq = args.find((a) => a.startsWith(name + "="));
  if (eq) return eq.slice(name.length + 1);
  const i = args.indexOf(name);
  if (i !== -1 && i + 1 < args.length && !args[i + 1].startsWith("--")) return args[i + 1];
  return fallback;
}

const norm = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{ASCII}]/gu, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const stop = new Set([
  "nasa", "arset", "the", "of", "and", "for", "to", "a", "an", "in", "on", "with",
  "using", "from", "part", "session", "introduction", "overview", "applications",
]);

function tokens(s) {
  return norm(s)
    .split(" ")
    .filter((w) => w.length > 2 && !stop.has(w));
}

function partOf(title) {
  let m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\s*(?:\/|\s*(?:of|de)\s*)\s*(\d+)/i.exec(title);
  if (m) return { part: Number(m[1]), total: Number(m[2]) };
  m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\b/i.exec(title);
  if (m) return { part: Number(m[1]), total: null };
  m = /\b(\d+)\s*\/\s*(\d+)\s*$/.exec(title);
  if (m) return { part: Number(m[1]), total: Number(m[2]) };
  return { part: null, total: null };
}

/** Retire le marqueur de partie/session pour obtenir le nom de la série. */
function seriesBase(title) {
  return title
    .replace(/\s*[,:–-]?\s*(?:part|parte|session|sesi[oó]n)\s*\d+\s*(?:\/\s*\d+|\s*(?:of|de)\s*\d+)?\s*$/i, "")
    .replace(/\s*[,:–-]\s*\d+\s*\/\s*\d+\s*$/, "")
    .replace(/[\s,:-]+$/, "")
    .trim();
}

function overlap(title, target) {
  const a = new Set(tokens(title));
  const b = new Set(tokens(target));
  if (!a.size || !b.size) return 0;
  let n = 0;
  for (const w of a) if (b.has(w)) n++;
  return n / Math.min(a.size, b.size);
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

async function search(page, query) {
  await page.goto(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(2500);
  return page.$$eval("ytd-video-renderer", (els) =>
    els.slice(0, 12).map((e) => {
      const a = e.querySelector("a#video-title");
      const href = a?.href ?? "";
      const id = href.includes("v=") ? href.split("v=")[1].split("&")[0] : "";
      const meta = e.querySelector("#metadata-line")?.textContent?.trim().replace(/\s+/g, " ") ?? "";
      const channel =
        e.querySelector("ytd-channel-name a")?.textContent?.trim() ??
        e.querySelector("#channel-name a")?.textContent?.trim() ??
        "";
      const duration = e.querySelector("ytd-thumbnail-overlay-time-status-renderer")?.textContent?.trim() ?? "";
      return { id, title: a?.textContent?.trim() ?? "", channel, meta, duration };
    }).filter((x) => x.id && x.title),
  );
}

async function report() {
  const catalog = readJson(catalogPath);
  const links = readJson(linksPath);
  const existing = new Set(catalog.videos.map((v) => v.youtube_video_id));
  let targets = catalog.modules.filter((m) => m.status !== "ok");
  if (only) targets = targets.filter((m) => m.key === only || m.key.includes(only));
  if (limit) targets = targets.slice(0, Number(limit));

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    locale: "en-US",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  });
  const page = await ctx.newPage();
  const out = {};

  for (let i = 0; i < targets.length; i++) {
    const m = targets[i];
    const link = links.find((x) => norm(x.title) === norm(m.title));
    const existingVideos = m.source_video_ids
      .map((id) => catalog.videos.find((v) => v.id === id))
      .filter(Boolean);
    const series = [
      ...new Set(existingVideos.map((v) => seriesBase(v.name)).filter((s) => s.length > 8)),
    ].slice(0, 3);
    const queries = [
      { q: `NASA ARSET "${m.title}"`, target: m.title },
      { q: `"${m.title}" NASA ARSET`, target: m.title },
      ...series.map((s) => ({ q: `NASA ARSET "${s}"`, target: s })),
    ];
    const found = new Map();
    for (const { q, target } of queries) {
      let results = [];
      try {
        results = await search(page, q);
      } catch (e) {
        console.log(`  ! ${q}: ${e.message}`);
      }
      for (const r of results) {
        const ov = overlap(r.title, target);
        const p = partOf(r.title);
        if (!/arset/i.test(r.title) && ov < 0.6) continue;
        const prev = found.get(r.id);
        if (prev && prev.overlap >= ov) continue;
        found.set(r.id, {
          ...r,
          overlap: Number(ov.toFixed(2)),
          part: p.part,
          total: p.total,
          alreadyInCatalog: existing.has(r.id),
          query: q,
          matched_series: target,
        });
      }
      if (found.size >= 8) break;
    }
    const candidates = [...found.values()].sort(
      (a, b) => b.overlap - a.overlap || (a.part ?? 99) - (b.part ?? 99),
    );
    out[m.key] = {
      title: m.title,
      status: m.status,
      nasa_url: link?.url ?? null,
      existing_videos: existingVideos.map((v) => ({
        id: v.id,
        youtube_video_id: v.youtube_video_id,
        name: v.name,
      })),
      candidates,
    };
    console.log(
      `[${i + 1}/${targets.length}] ${m.title} · ${candidates.filter((c) => !c.alreadyInCatalog).length} nouveau(x) / ${candidates.length}`,
    );
    await page.waitForTimeout(800);
  }

  await browser.close();
  fs.writeFileSync(reportPath, JSON.stringify(out, null, 2) + "\n");
  console.log(`\n✅ Rapport : ${reportPath}`);
}

function applyAdditions() {
  if (!additionsPath) throw new Error("--additions <json> requis avec --apply");
  const additions = readJson(additionsPath);
  const catalog = readJson(catalogPath);
  const taxonomy = readJson(taxonomyPath);
  const yt = readJson(path.join(repoRoot, "resources/catalog/youtube_titles.json"));
  const byModuleKey = new Map(catalog.modules.map((m) => [m.key, m]));
  let nextId = Math.max(...catalog.videos.map((v) => v.id)) + 1;
  let added = 0;

  for (const [key, videos] of Object.entries(additions)) {
    const mod = byModuleKey.get(key);
    if (!mod) throw new Error(`module inconnu: ${key}`);
    for (const item of videos) {
      if (!item.youtube_video_id) continue;
      let video = catalog.videos.find((v) => v.youtube_video_id === item.youtube_video_id);
      if (!video) {
        video = {
          id: nextId++,
          sha256: "",
          name: item.name,
          duration_seconds: item.duration_seconds ?? 0,
          youtube_url: `https://www.youtube.com/watch?v=${item.youtube_video_id}`,
          youtube_video_id: item.youtube_video_id,
          url_status: "manual_verified",
          canonical_module_id: mod.id,
          module_ids: [mod.id],
          local_filenames: [],
          instances: [],
        };
        catalog.videos.push(video);
        added++;
      }
      if (!mod.source_video_ids.includes(video.id)) mod.source_video_ids.push(video.id);
      if (!video.module_ids.includes(mod.id)) video.module_ids.push(mod.id);
      yt[item.youtube_video_id] = {
        title: item.name,
        author: item.author ?? "NASA Video",
      };
    }
    // statut : ok si des vidéos, sinon inchangé
    if (mod.source_video_ids.length) {
      mod.status = mod.status === "upcoming" ? "partial" : mod.status;
    }
    const tx = taxonomy.modules.find((x) => x.key === key);
    if (tx) tx.status = mod.status;
  }

  const sorted = {};
  for (const k of Object.keys(yt).sort()) sorted[k] = yt[k];
  fs.writeFileSync(path.join(repoRoot, "resources/catalog/youtube_titles.json"), JSON.stringify(sorted, null, 2) + "\n");
  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + "\n");
  fs.writeFileSync(taxonomyPath, JSON.stringify(taxonomy, null, 2) + "\n");
  fs.copyFileSync(catalogPath, path.join(repoRoot, "apps/mobile/assets/video_catalog.json"));
  console.log(`✅ ${added} vidéo(s) ajoutée(s), ${Object.keys(additions).length} module(s) mis à jour.`);
}

if (apply) applyAdditions();
else report().catch((e) => {
  console.error(e);
  process.exit(1);
});
