// Réordonne source_video_ids de chaque module du catalogue par numéro d'épisode
// (voir @arset/core : episodeNumber). Réécrit resources/catalog/video_catalog.json
// puis recopie vers apps/mobile/assets/. Nécessite `make build-core` (le tri vient
// de @arset/core/dist). Idempotent.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { episodeNumber } from "../packages/core/dist/index.js";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

const catalogPath = resolve(repoRoot, "resources/catalog/video_catalog.json");
const mobilePath = resolve(repoRoot, "apps/mobile/assets/video_catalog.json");

const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
const nameById = new Map(catalog.videos.map((v) => [v.id, v.name]));

let changed = 0;
for (const mod of catalog.modules) {
  const before = mod.source_video_ids;
  const after = [...before].sort((a, b) => {
    const na = nameById.get(a) ?? "";
    const nb = nameById.get(b) ?? "";
    return episodeNumber(na) - episodeNumber(nb);
  });
  if (after.some((id, i) => id !== before[i])) changed++;
  mod.source_video_ids = after;
}

const json = JSON.stringify(catalog, null, 2) + "\n";
writeFileSync(catalogPath, json);
writeFileSync(mobilePath, json);

console.log(`✅ ${changed} modules réordonnés.`);
console.log(`   ${catalogPath}`);
console.log(`   ${mobilePath}`);
