import type { ModuleStatus, VideoView } from "@arset/core";
import { staticApi } from "./staticApi";

export interface DownloadEntry {
  status: "idle" | "downloading" | "done" | "error";
  progress: number;
  error?: string;
}

export interface ModuleVideos {
  key: string;
  title: string;
  videos: VideoView[];
}

export interface CatalogModuleSummary {
  key: string;
  title: string;
  status: ModuleStatus;
  videoCount: number;
  durationSeconds: number;
}

export interface CatalogSubcategory {
  key: string;
  title: string;
  modules: CatalogModuleSummary[];
}

export interface CatalogCategory {
  key: string;
  title: string;
  modules: CatalogModuleSummary[];
  subcategories: CatalogSubcategory[];
}

export interface ProgressData {
  modules: Record<string, { completed: boolean; updated: string }>;
  videos: Record<string, { watched: boolean; updated: string }>;
}

export interface PlaybackEntry {
  seconds: number;
  duration: number;
  updated: string;
}

export type PlaybackMap = Record<string, PlaybackEntry>;

export interface CatalogStats {
  modules: number;
  videos: number;
}

export interface ArsetApi {
  catalog(): Promise<CatalogCategory[]>;
  stats(): Promise<CatalogStats>;
  progress(): Promise<ProgressData>;
  watchlist(): Promise<string[]>;
  toggleWatchlist(key: string): Promise<string[]>;
  playback(): Promise<PlaybackMap>;
  savePlayback(id: number, seconds: number, duration: number): Promise<PlaybackMap>;
  moduleVideos(key: string): Promise<ModuleVideos>;
  toggleModule(key: string, completed?: boolean): Promise<ProgressData>;
  toggleVideo(id: number, watched?: boolean): Promise<ProgressData>;
  download(id: number): Promise<DownloadEntry>;
  downloadStatus(id: number): Promise<DownloadEntry>;
}

async function getJSON<T>(path: string): Promise<T> {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`${r.status} ${r.statusText} — ${path}`);
  return r.json() as Promise<T>;
}

async function postJSON<T>(path: string, body?: unknown): Promise<T> {
  const r = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`${r.status} ${r.statusText} — ${path}`);
  return r.json() as Promise<T>;
}

/** Client HTTP — backend Express (dev local / `make pc`). */
const httpApi: ArsetApi = {
  catalog: () => getJSON<CatalogCategory[]>("/api/catalog"),
  stats: () => getJSON<CatalogStats>("/api/catalog/stats"),
  progress: () => getJSON<ProgressData>("/api/progress"),
  watchlist: () => getJSON<string[]>("/api/watchlist"),
  toggleWatchlist: (key: string) =>
    postJSON<string[]>(`/api/watchlist/${encodeURIComponent(key)}`),
  playback: () => getJSON<PlaybackMap>("/api/playback"),
  savePlayback: (id: number, seconds: number, duration: number) =>
    postJSON<PlaybackMap>(`/api/playback/${id}`, { seconds, duration }),
  moduleVideos: (key: string) =>
    getJSON<ModuleVideos>(`/api/modules/${encodeURIComponent(key)}/videos`),
  toggleModule: (key: string, completed?: boolean) =>
    postJSON<ProgressData>(
      `/api/progress/module/${encodeURIComponent(key)}`,
      completed === undefined ? undefined : { completed },
    ),
  toggleVideo: (id: number, watched?: boolean) =>
    postJSON<ProgressData>(
      `/api/progress/video/${id}`,
      watched === undefined ? undefined : { watched },
    ),
  download: (id: number) =>
    postJSON<DownloadEntry>(`/api/videos/${id}/download`),
  downloadStatus: (id: number) =>
    getJSON<DownloadEntry>(`/api/videos/${id}/download-status`),
};

/** Mode statique (build `--mode pages`) : aucune API requise. */
const STATIC = import.meta.env.MODE === "pages";

export const api: ArsetApi = STATIC ? staticApi : httpApi;

/** Le téléchargement local (yt-dlp) n'existe qu'avec le backend. */
export const supportsLocalDownload = !STATIC;
