// Implémentation « statique » de l'API, pour l'hébergement sans backend
// (GitHub Pages). Le catalogue et le parcours sont bundlés dans public/data/,
// l'index est calculé côté navigateur via @arset/core, et la progression est
// persistée dans localStorage. Le téléchargement local (yt-dlp) est absent.
import {
  buildCatalogIndex,
  categoryOf,
  parseCatalog,
  parseLearningPath,
  type CatalogIndex,
  type LearningPath,
  type VideoView,
} from "@arset/core";
import type {
  ArsetApi,
  ComplementaryGroup,
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

let dataPromise: Promise<{ index: CatalogIndex; learningPath: LearningPath }> | null =
  null;

function load(): Promise<{ index: CatalogIndex; learningPath: LearningPath }> {
  if (!dataPromise) {
    dataPromise = (async () => {
      const [catalog, learningPath] = await Promise.all([
        getJSON<unknown>("video_catalog.json"),
        getJSON<unknown>("learning_path.json"),
      ]);
      return {
        index: buildCatalogIndex(parseCatalog(catalog)),
        learningPath: parseLearningPath(learningPath),
      };
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
  async learningPath(): Promise<LearningPath> {
    return (await load()).learningPath;
  },

  async complementary(): Promise<ComplementaryGroup[]> {
    const { index } = await load();
    const groups = new Map<string, ComplementaryGroup["modules"]>();
    for (const mod of index.complementaryModules) {
      const cat = categoryOf(mod.key);
      const videos = index.videosByModuleKey.get(mod.key) ?? [];
      const durationSeconds = videos.reduce((s, v) => s + v.duration_seconds, 0);
      const list = groups.get(cat) ?? [];
      list.push({
        key: mod.key,
        title: mod.title,
        videoCount: videos.length,
        durationSeconds: Math.round(durationSeconds),
      });
      groups.set(cat, list);
    }
    return Array.from(groups.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([category, modules]) => ({ category, modules }));
  },

  async progress(): Promise<ProgressData> {
    return readProgress();
  },

  async moduleVideos(key: string): Promise<ModuleVideos> {
    const { index } = await load();
    const mod = index.modulesByKey.get(key);
    if (!mod) throw new Error("Module introuvable");
    const videos = (index.videosByModuleKey.get(key) ?? [])
      .map((v) => videoView(index, v.id))
      .filter((v): v is VideoView => v !== null);
    return { key: mod.key, title: mod.title, videos };
  },

  async toggleModule(key: string, completed?: boolean): Promise<{ completed: boolean }> {
    const data = readProgress();
    const value = completed ?? !(data.modules[key]?.completed ?? false);
    data.modules[key] = { completed: value, updated: now() };
    writeProgress(data);
    return { completed: value };
  },

  async toggleVideo(id: number, watched?: boolean): Promise<{ watched: boolean }> {
    const data = readProgress();
    const k = String(id);
    const value = watched ?? !(data.videos[k]?.watched ?? false);
    data.videos[k] = { watched: value, updated: now() };
    writeProgress(data);
    return { watched: value };
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
