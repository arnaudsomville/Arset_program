import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PlaybackMap } from "./types";

const WATCHED_KEY = "arset.watched.v1";
const COMPLETED_KEY = "arset.completed.v1";
const DOWNLOADS_KEY = "arset.downloads.v1";
const WATCHLIST_KEY = "arset.watchlist.v1";
const PLAYBACK_KEY = "arset.playback.v1";

async function readSet(key: string): Promise<Set<string>> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

async function writeSet(key: string, set: Set<string>): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(Array.from(set)));
}

export async function loadWatched(): Promise<Set<string>> {
  return readSet(WATCHED_KEY);
}

export async function toggleWatched(id: string): Promise<Set<string>> {
  const set = await readSet(WATCHED_KEY);
  if (set.has(id)) set.delete(id);
  else set.add(id);
  await writeSet(WATCHED_KEY, set);
  return set;
}

export async function saveWatched(set: Set<string>): Promise<void> {
  await writeSet(WATCHED_KEY, set);
}

export async function loadCompleted(): Promise<Set<string>> {
  return readSet(COMPLETED_KEY);
}

export async function toggleCompleted(key: string): Promise<Set<string>> {
  const set = await readSet(COMPLETED_KEY);
  if (set.has(key)) set.delete(key);
  else set.add(key);
  await writeSet(COMPLETED_KEY, set);
  return set;
}

export async function saveCompleted(set: Set<string>): Promise<void> {
  await writeSet(COMPLETED_KEY, set);
}

export async function loadWatchlist(): Promise<Set<string>> {
  return readSet(WATCHLIST_KEY);
}

export async function toggleWatchlist(key: string): Promise<Set<string>> {
  const set = await readSet(WATCHLIST_KEY);
  if (set.has(key)) set.delete(key);
  else set.add(key);
  await writeSet(WATCHLIST_KEY, set);
  return set;
}

export async function saveWatchlist(set: Set<string>): Promise<void> {
  await writeSet(WATCHLIST_KEY, set);
}

/** Map videoId → uri local du fichier téléchargé. */
export async function loadDownloads(): Promise<Record<string, string>> {
  try {
    const raw = await AsyncStorage.getItem(DOWNLOADS_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export async function saveDownload(
  id: string,
  uri: string,
): Promise<Record<string, string>> {
  const all = await loadDownloads();
  all[id] = uri;
  await AsyncStorage.setItem(DOWNLOADS_KEY, JSON.stringify(all));
  return all;
}

export async function loadPlayback(): Promise<PlaybackMap> {
  try {
    const raw = await AsyncStorage.getItem(PLAYBACK_KEY);
    return raw ? (JSON.parse(raw) as PlaybackMap) : {};
  } catch {
    return {};
  }
}

export async function savePlaybackPosition(
  id: string,
  seconds: number,
  duration: number,
): Promise<PlaybackMap> {
  const data = await loadPlayback();
  if (Number.isFinite(seconds) && seconds > 0) {
    data[id] = {
      seconds: Math.floor(seconds),
      duration: Number.isFinite(duration) ? Math.round(duration) : 0,
      updated: new Date().toISOString(),
    };
  } else {
    delete data[id];
  }
  await AsyncStorage.setItem(PLAYBACK_KEY, JSON.stringify(data));
  return data;
}

export async function clearPlaybackPosition(id: string): Promise<PlaybackMap> {
  return savePlaybackPosition(id, 0, 0);
}
