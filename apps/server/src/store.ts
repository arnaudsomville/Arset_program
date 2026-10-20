import fs from "node:fs";
import path from "node:path";
import { playbackFile, progressFile, watchlistFile } from "./config";

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

// ── Watchlist ───────────────────────────────────────────────────────────────

let watchlistCache: string[] | null = null;

export function loadWatchlist(): string[] {
  if (watchlistCache) return watchlistCache;
  try {
    const raw = JSON.parse(fs.readFileSync(watchlistFile(), "utf8")) as {
      modules?: unknown;
    };
    watchlistCache = Array.isArray(raw.modules)
      ? raw.modules.filter((k): k is string => typeof k === "string")
      : [];
  } catch {
    watchlistCache = [];
  }
  return watchlistCache;
}

function persistWatchlist(modules: string[]): void {
  fs.mkdirSync(path.dirname(watchlistFile()), { recursive: true });
  fs.writeFileSync(watchlistFile(), JSON.stringify({ modules }, null, 2));
}

/** Ajoute/retire un module de la watchlist et renvoie la liste à jour. */
export function toggleWatchlist(key: string): string[] {
  const modules = [...loadWatchlist()];
  const i = modules.indexOf(key);
  if (i === -1) modules.unshift(key);
  else modules.splice(i, 1);
  watchlistCache = modules;
  persistWatchlist(modules);
  return modules;
}

// ── Reprise de lecture ──────────────────────────────────────────────────────

export interface PlaybackEntry {
  seconds: number;
  duration: number;
  updated: string;
}

export type PlaybackMap = Record<string, PlaybackEntry>;

let playbackCache: PlaybackMap | null = null;

export function loadPlayback(): PlaybackMap {
  if (playbackCache) return playbackCache;
  try {
    const raw = JSON.parse(fs.readFileSync(playbackFile(), "utf8")) as unknown;
    playbackCache =
      typeof raw === "object" && raw !== null ? (raw as PlaybackMap) : {};
  } catch {
    playbackCache = {};
  }
  return playbackCache;
}

function persistPlayback(data: PlaybackMap): void {
  fs.mkdirSync(path.dirname(playbackFile()), { recursive: true });
  fs.writeFileSync(playbackFile(), JSON.stringify(data, null, 2));
}

/** Enregistre une position (ou l'efface si `seconds <= 0`). */
export function setPlayback(
  id: string,
  seconds: number,
  duration: number,
): PlaybackMap {
  const data = { ...loadPlayback() };
  if (Number.isFinite(seconds) && seconds > 0) {
    data[id] = {
      seconds: Math.floor(seconds),
      duration: Number.isFinite(duration) ? Math.round(duration) : 0,
      updated: now(),
    };
  } else {
    delete data[id];
  }
  playbackCache = data;
  persistPlayback(data);
  return data;
}
