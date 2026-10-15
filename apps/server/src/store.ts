import fs from "node:fs";
import path from "node:path";
import { progressFile } from "./config";

interface ModuleProgress {
  completed: boolean;
  updated: string;
}

interface VideoProgress {
  watched: boolean;
  updated: string;
}

export interface ProgressData {
  modules: Record<string, ModuleProgress>;
  videos: Record<string, VideoProgress>;
}

const empty = (): ProgressData => ({ modules: {}, videos: {} });

let cache: ProgressData | null = null;

export function now(): string {
  return new Date().toISOString();
}

export function loadProgress(): ProgressData {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(progressFile(), "utf8")) as ProgressData;
  } catch {
    cache = empty();
  }
  return cache;
}

function persist(data: ProgressData): void {
  fs.mkdirSync(path.dirname(progressFile()), { recursive: true });
  fs.writeFileSync(progressFile(), JSON.stringify(data, null, 2));
}

/**
 * Charge la progression, laisse `fn` la muter, persiste une seule fois et
 * retourne l'état résultant. Utilisé pour les mises à jour en cascade
 * (module ⇄ vidéos).
 */
export function mutateProgress(fn: (data: ProgressData) => void): ProgressData {
  const data = loadProgress();
  fn(data);
  persist(data);
  return data;
}

export function setModuleCompleted(key: string, completed: boolean): void {
  const data = loadProgress();
  data.modules[key] = { completed, updated: now() };
  persist(data);
}

export function toggleModuleCompleted(key: string): boolean {
  const data = loadProgress();
  const prev = data.modules[key]?.completed ?? false;
  setModuleCompleted(key, !prev);
  return !prev;
}

export function setVideoWatched(id: string, watched: boolean): void {
  const data = loadProgress();
  data.videos[id] = { watched, updated: now() };
  persist(data);
}

export function toggleVideoWatched(id: string): boolean {
  const data = loadProgress();
  const prev = data.videos[id]?.watched ?? false;
  setVideoWatched(id, !prev);
  return !prev;
}
