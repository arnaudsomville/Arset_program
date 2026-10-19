import type {
  CatalogCategory,
  CatalogModule,
  CatalogSubcategory,
  Video,
  VideoCatalog,
} from "./types";

export interface CatalogIndex {
  modulesByKey: Map<string, CatalogModule>;
  videosByKey: Map<string, Video[]>;
  categories: CatalogCategory[];
}

/**
 * Numéro d'épisode extrait du titre (ex. « ..., Part 2/3 ») pour ordonner les
 * séries d'un module. Infinity si aucun marqueur (→ en fin de liste).
 */
export function episodeNumber(name: string): number {
  let m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\s*(?:\/|\s*de\s*)\s*(\d+)/i.exec(name);
  if (m) return Number(m[1]);
  m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\b/i.exec(name);
  if (m) return Number(m[1]);
  m = /[,:]\s*(\d+)\s*\/\s*(\d+)\s*$/.exec(name);
  if (m) return Number(m[1]);
  m = /\b(\d+)\s*\/\s*(\d+)\s*$/.exec(name);
  if (m) return Number(m[1]);
  return Infinity;
}

export function buildIndex(catalog: VideoCatalog): CatalogIndex {
  const videosById = new Map(catalog.videos.map((v) => [v.id, v]));
  const modulesByKey = new Map(catalog.modules.map((m) => [m.key, m]));
  const videosByKey = new Map<string, Video[]>();
  for (const m of catalog.modules) {
    videosByKey.set(
      m.key,
      m.source_video_ids
        .map((id) => videosById.get(id))
        .filter((v): v is Video => v !== undefined)
        .sort((a, b) => episodeNumber(a.name) - episodeNumber(b.name)),
    );
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

  return { modulesByKey, videosByKey, categories };
}

/** Catégorie d'une clé de module (ex: "disasters/floods/01-..." -> "disasters"). */
export function categoryOf(key: string): string {
  return key.split("/")[0] ?? "autres";
}

/** Sous-catégorie d'une clé de module, ou null. */
export function subcategoryOf(key: string): string | null {
  const parts = key.split("/");
  return parts.length >= 3 ? (parts[1] ?? null) : null;
}

export function formatDuration(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return "—";
  const s = Math.round(totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h > 0 ? `${h}h${String(m).padStart(2, "0")}` : `${m}min`;
}
