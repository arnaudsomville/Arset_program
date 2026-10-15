import type { CatalogModule, Video, VideoCatalog } from "./types";
import { episodeNumber } from "./episode";

export interface CatalogIndex {
  videosById: Map<number, Video>;
  modulesByKey: Map<string, CatalogModule>;
  /** module key -> ordered videos */
  videosByModuleKey: Map<string, Video[]>;
  /** complementary modules (not part of the learning path, i.e. other_modules/...) */
  complementaryModules: CatalogModule[];
}

export function parseCatalog(data: unknown): VideoCatalog {
  if (typeof data !== "object" || data === null) {
    throw new Error("Invalid catalog: expected an object");
  }
  const catalog = data as VideoCatalog;
  if (!Array.isArray(catalog.modules) || !Array.isArray(catalog.videos)) {
    throw new Error("Invalid catalog: missing modules/videos arrays");
  }
  return catalog;
}

/**
 * Construit un index en mémoire à partir du catalog.
 * Les vidéos d'un module sont ordonnées par `source_video_ids`, puis par
 * numéro d'épisode extrait du titre (les séries « ..., Part X/N » remises dans
 * l'ordre ; les vidéos sans numéro restent en fin, ordre d'origine conservé).
 */
export function buildCatalogIndex(catalog: VideoCatalog): CatalogIndex {
  const videosById = new Map<number, Video>();
  for (const v of catalog.videos) {
    videosById.set(v.id, v);
  }

  const modulesByKey = new Map<string, CatalogModule>();
  for (const m of catalog.modules) {
    modulesByKey.set(m.key, m);
  }

  const videosByModuleKey = new Map<string, Video[]>();
  for (const m of catalog.modules) {
    const videos = m.source_video_ids
      .map((id) => videosById.get(id))
      .filter((v): v is Video => v !== undefined)
      .sort((a, b) => episodeNumber(a.name) - episodeNumber(b.name));
    videosByModuleKey.set(m.key, videos);
  }

  const complementaryModules = catalog.modules.filter((m) =>
    m.key.startsWith("other_modules/"),
  );

  return { videosById, modulesByKey, videosByModuleKey, complementaryModules };
}

/** Extrait la catégorie d'une clé de module (ex: "other_modules/air-quality/005-..." -> "air-quality"). */
export function categoryOf(key: string): string {
  const parts = key.split("/");
  return parts.length >= 2 ? parts[1] : parts[0] ?? "autres";
}
