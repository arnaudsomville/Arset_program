import type { LearningPath, VideoView } from "@arset/core";
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

export interface ComplementaryModule {
  key: string;
  title: string;
  videoCount: number;
  durationSeconds: number;
}

export interface ComplementaryGroup {
  category: string;
  modules: ComplementaryModule[];
}

export interface ProgressData {
  modules: Record<string, { completed: boolean; updated: string }>;
  videos: Record<string, { watched: boolean; updated: string }>;
}

export interface ArsetApi {
  learningPath(): Promise<LearningPath>;
  complementary(): Promise<ComplementaryGroup[]>;
  progress(): Promise<ProgressData>;
  moduleVideos(key: string): Promise<ModuleVideos>;
  toggleModule(key: string, completed?: boolean): Promise<{ completed: boolean }>;
  toggleVideo(id: number, watched?: boolean): Promise<{ watched: boolean }>;
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
  learningPath: () => getJSON<LearningPath>("/api/learning-path"),
  complementary: () => getJSON<ComplementaryGroup[]>("/api/complementary"),
  progress: () => getJSON<ProgressData>("/api/progress"),
  moduleVideos: (key: string) =>
    getJSON<ModuleVideos>(`/api/modules/${encodeURIComponent(key)}/videos`),
  toggleModule: (key: string, completed?: boolean) =>
    postJSON<{ completed: boolean }>(
      `/api/progress/module/${encodeURIComponent(key)}`,
      completed === undefined ? undefined : { completed },
    ),
  toggleVideo: (id: number, watched?: boolean) =>
    postJSON<{ watched: boolean }>(
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
