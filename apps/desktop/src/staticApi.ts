// Implémentation « statique » de l'API, pour l'hébergement sans backend
// (GitHub Pages). Le catalogue est bundlé dans public/data/, l'index est calculé
// côté navigateur via @arset/core, et la progression est persistée dans
// localStorage. Le téléchargement local (yt-dlp) est absent.
import {
  buildCatalogIndex,
  parseCatalog,
  type CatalogIndex,
  type VideoView,
} from "@arset/core";
import type {
  ArsetApi,
  CatalogCategory,
  CatalogModuleSummary,
  DownloadEntry,
  ModuleVideos,
  ProgressData,
} from "./api";

const PROGRESS_KEY = "arset.progress.v1";

async function getJSON<T>(name: string): Promise<T> {
  const r = await fetch(`${import.meta.env.BASE_URL}data/${name}`);
  if (!r.ok) throw new Error(`${r.status} ${r.statusText} — data/${name}`);
  return r.json() as Promise<T>;
}

let dataPromise: Promise<CatalogIndex> | null = null;

function load(): Promise<CatalogIndex> {
  if (!dataPromise) {
    dataPromise = (async () => {
      const catalog = await getJSON<unknown>("video_catalog.json");
      return buildCatalogIndex(parseCatalog(catalog));
    })();
  }
  return dataPromise;
}

function readProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw) return JSON.parse(raw) as ProgressData;
  } catch {
    /* ignore */
  }
  return { modules: {}, videos: {} };
}

function writeProgress(data: ProgressData): void {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

function now(): string {
  return new Date().toISOString();
}

function moduleSummary(index: CatalogIndex, key: string): CatalogModuleSummary {
  const mod = index.modulesByKey.get(key);
  const videos = index.videosByModuleKey.get(key) ?? [];
  return {
    key,
    title: mod?.title ?? key,
    status: mod?.status ?? "ok",
    videoCount: videos.length,
    durationSeconds: Math.round(videos.reduce((s, v) => s + v.duration_seconds, 0)),
  };
}

function videoView(index: CatalogIndex, id: number): VideoView | null {
  const v = index.videosById.get(id);
  if (!v) return null;
  return {
    id: v.id,
    title: v.name,
    durationSeconds: Math.round(v.duration_seconds),
    youtubeUrl: v.youtube_url,
    youtubeVideoId: v.youtube_video_id,
    urlStatus: v.url_status,
    downloaded: false,
    streamUrl: "",
  };
}

export const staticApi: ArsetApi = {
  async catalog(): Promise<CatalogCategory[]> {
    const index = await load();
    return index.categories.map((cat) => ({
      key: cat.key,
      title: cat.label,
      modules: cat.modules.map((m) => moduleSummary(index, m.key)),
      subcategories: cat.subcategories.map((sub) => ({
        key: sub.key,
        title: sub.label,
        modules: sub.modules.map((m) => moduleSummary(index, m.key)),
      })),
    }));
  },

  async progress(): Promise<ProgressData> {
    return readProgress();
  },

  async moduleVideos(key: string): Promise<ModuleVideos> {
    const index = await load();
    const mod = index.modulesByKey.get(key);
    if (!mod) throw new Error("Module introuvable");
    const videos = (index.videosByModuleKey.get(key) ?? [])
      .map((v) => videoView(index, v.id))
      .filter((v): v is VideoView => v !== null);
    return { key: mod.key, title: mod.title, videos };
  },

  async toggleModule(key: string, completed?: boolean): Promise<ProgressData> {
    const index = await load();
    const data = readProgress();
    const value = completed ?? !(data.modules[key]?.completed ?? false);
    data.modules[key] = { completed: value, updated: now() };
    for (const v of index.videosByModuleKey.get(key) ?? []) {
      data.videos[String(v.id)] = { watched: value, updated: now() };
    }
    writeProgress(data);
    return data;
  },

  async toggleVideo(id: number, watched?: boolean): Promise<ProgressData> {
    const index = await load();
    const data = readProgress();
    const k = String(id);
    const value = watched ?? !(data.videos[k]?.watched ?? false);
    data.videos[k] = { watched: value, updated: now() };
    for (const [key, videos] of index.videosByModuleKey) {
      if (!videos.some((v) => String(v.id) === k)) continue;
      const allWatched =
        videos.length > 0 &&
        videos.every((v) => data.videos[String(v.id)]?.watched ?? false);
      data.modules[key] = { completed: allWatched, updated: now() };
    }
    writeProgress(data);
    return data;
  },

  async download(_id: number): Promise<DownloadEntry> {
    return {
      status: "error",
      progress: 0,
      error: "Téléchargement indisponible en ligne (mode statique).",
    };
  },

  async downloadStatus(_id: number): Promise<DownloadEntry> {
    return { status: "idle", progress: 0 };
  },
};
