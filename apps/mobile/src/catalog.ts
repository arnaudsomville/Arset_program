import type { CatalogModule, Video, VideoCatalog } from "./types";

export interface CatalogIndex {
  modulesByKey: Map<string, CatalogModule>;
  videosByKey: Map<string, Video[]>;
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
        .filter((v): v is Video => v !== undefined),
    );
  }
  return { modulesByKey, videosByKey };
}

export function categoryOf(key: string): string {
  const parts = key.split("/");
  return parts.length >= 2 ? parts[1] : parts[0] ?? "autres";
}

export function formatDuration(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return "—";
  const s = Math.round(totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h > 0 ? `${h}h${String(m).padStart(2, "0")}` : `${m}min`;
}
