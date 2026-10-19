import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/** Répertoire de données runtime (vidéos téléchargées, progression). Hors repo. */
export function dataDir(): string {
  return process.env.ARSET_DATA_DIR || path.join(os.homedir(), ".arset-data");
}

export function videosDir(): string {
  return path.join(dataDir(), "videos");
}

export function progressFile(): string {
  return path.join(dataDir(), "progress.json");
}

export function watchlistFile(): string {
  return path.join(dataDir(), "watchlist.json");
}

/** Remonte les répertoires jusqu'à trouver la racine du repo (contient resources/catalog/). */
function findRepoRoot(start: string): string {
  let dir = path.resolve(start);
  for (let i = 0; i < 12; i++) {
    if (fs.existsSync(path.join(dir, "resources", "catalog", "video_catalog.json"))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(
    "Impossible de localiser resources/catalog/video_catalog.json. Lancez `make sync` depuis la racine du repo.",
  );
}

function repoRoot(): string {
  return findRepoRoot(__dirname);
}

export function catalogFile(): string {
  return (
    process.env.ARSET_CATALOG_PATH ||
    path.join(repoRoot(), "resources", "catalog", "video_catalog.json")
  );
}

export const PORT = Number(process.env.PORT || 4000);
