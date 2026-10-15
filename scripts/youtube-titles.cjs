// Récupère le vrai titre YouTube de chaque vidéo du catalogue (base de vérité
// pour la réconciliation des `name`). Écrit resources/catalog/youtube_titles.json.
//
// Dépend de Playwright. S'il n'est pas dans le repo, pointer le dossier du skill :
//   PLAYWRIGHT_DIR="$HOME/.opencode/skills/playwright-skill" node scripts/youtube-titles.cjs
const fs = require("node:fs");
const path = require("node:path");

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
const repoRoot = path.resolve(__dirname, "..");
const catalog = JSON.parse(
  fs.readFileSync(path.join(repoRoot, "resources/catalog/video_catalog.json"), "utf8"),
);
const ids = [...new Set(catalog.videos.map((v) => v.youtube_video_id).filter(Boolean))];
const outPath = path.join(repoRoot, "resources/catalog/youtube_titles.json");
const CONCURRENCY = Number(process.env.CONCURRENCY || 5);

async function fetchTitle(ctx, id) {
  const page = await ctx.newPage();
  try {
    await page.goto(`https://www.youtube.com/watch?v=${id}`, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });
    await page
      .waitForSelector('meta[name="title"]', { timeout: 15000 })
      .catch(() => {});
    const title = await page
      .$eval('meta[name="title"]', (el) => el.getAttribute("content") || "")
      .catch(() => "");
    let author = null;
    try {
      author = (
        await page.$eval(
          "ytd-video-owner-renderer #channel-name a, #owner #channel-name a",
          (el) => el.textContent.trim(),
        )
      ) || null;
    } catch {
      /* ignore */
    }
    return { title: title || null, author, error: title ? null : "no-title" };
  } catch (e) {
    return { title: null, author: null, error: e.message };
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    locale: "en-US",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  });
  const results = {};
  const queue = [...ids];
  let done = 0;
  async function worker() {
    while (queue.length) {
      const id = queue.shift();
      const r = await fetchTitle(ctx, id);
      results[id] = r.error ? { title: null, error: r.error } : { title: r.title, author: r.author };
      done++;
      console.log(`[${done}/${ids.length}] ${id} => ${r.title || "(" + r.error + ")"}`);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  await browser.close();

  const sorted = {};
  for (const id of Object.keys(results).sort()) sorted[id] = results[id];
  fs.writeFileSync(outPath, JSON.stringify(sorted, null, 2) + "\n");
  const ok = Object.values(sorted).filter((v) => v.title).length;
  console.log(`\n✅ ${ok}/${ids.length} titres récupérés → ${outPath}`);
})();
