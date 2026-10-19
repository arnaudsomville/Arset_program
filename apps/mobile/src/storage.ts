import AsyncStorage from "@react-native-async-storage/async-storage";

const WATCHED_KEY = "arset.watched.v1";
const COMPLETED_KEY = "arset.completed.v1";
const DOWNLOADS_KEY = "arset.downloads.v1";
const WATCHLIST_KEY = "arset.watchlist.v1";

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
