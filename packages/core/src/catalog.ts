import type {
  CatalogCategory,
  CatalogModule,
  CatalogSubcategory,
  Video,
  VideoCatalog,
} from "./types";
import { episodeNumber } from "./episode";

export interface CatalogIndex {
  videosById: Map<number, Video>;
  modulesByKey: Map<string, CatalogModule>;
  /** module key -> ordered videos */
  videosByModuleKey: Map<string, Video[]>;
  /** Arbre catégorie > sous-catégorie > modules, dans l'ordre du guide PDF. */
  categories: CatalogCategory[];
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
  for (const v of catalog.videos) videosById.set(v.id, v);

  const modulesByKey = new Map<string, CatalogModule>();
  for (const m of catalog.modules) modulesByKey.set(m.key, m);

  const videosByModuleKey = new Map<string, Video[]>();
  for (const m of catalog.modules) {
    const videos = m.source_video_ids
      .map((id) => videosById.get(id))
      .filter((v): v is Video => v !== undefined)
      .sort((a, b) => episodeNumber(a.name) - episodeNumber(b.name));
    videosByModuleKey.set(m.key, videos);
  }

  const categories: CatalogCategory[] = [];
  const catMap = new Map<string, CatalogCategory>();
  const subMap = new Map<string, CatalogSubcategory>();

  for (const m of catalog.modules) {
    let cat = catMap.get(m.category);
    if (!cat) {
      cat = {
        key: m.key.split("/")[0] ?? m.category,
        label: m.category,
        modules: [],
        subcategories: [],
      };
      catMap.set(m.category, cat);
      categories.push(cat);
    }
    if (m.subcategory) {
      const subKey = `${cat.key}/${m.key.split("/")[1] ?? ""}`;
      let sub = subMap.get(subKey);
      if (!sub) {
        sub = {
          key: m.key.split("/")[1] ?? m.subcategory,
          label: m.subcategory,
          modules: [],
        };
        subMap.set(subKey, sub);
        cat.subcategories.push(sub);
      }
      sub.modules.push(m);
    } else {
      cat.modules.push(m);
    }
  }

  const byOrder = (a: CatalogModule, b: CatalogModule) => a.order - b.order;
  for (const cat of categories) {
    cat.modules.sort(byOrder);
    for (const sub of cat.subcategories) sub.modules.sort(byOrder);
  }

  return { videosById, modulesByKey, videosByModuleKey, categories };
}

/** Catégorie d'une clé de module (ex: "disasters/floods/01-..." -> "disasters"). */
export function categoryOf(key: string): string {
  return key.split("/")[0] ?? "autres";
}

/** Sous-catégorie d'une clé de module, ou null (ex: "disasters/floods/01-..." -> "floods"). */
export function subcategoryOf(key: string): string | null {
  const parts = key.split("/");
  return parts.length >= 3 ? (parts[1] ?? null) : null;
}
