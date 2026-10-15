// Copie les données statiques (catalogue + parcours) de resources/ vers
// public/data/, qui est servi tel quel par Vite/Pages. Source unique : resources/.
import { cpSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const destDir = resolve(here, "../public/data");

const files = [
  ["resources/catalog/video_catalog.json", "video_catalog.json"],
  ["resources/learning_path.json", "learning_path.json"],
];

mkdirSync(destDir, { recursive: true });
for (const [src, name] of files) {
  const from = resolve(repoRoot, src);
  const to = resolve(destDir, name);
  cpSync(from, to);
  console.log(`📄 ${src} → public/data/${name}`);
}
console.log("✅ Données statiques synchronisées.");
