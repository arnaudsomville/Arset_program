export type ModuleStatus = "ok" | "partial" | "upcoming";

export interface Video {
  id: number;
  name: string;
  duration_seconds: number;
  youtube_url: string;
  youtube_video_id: string;
  url_status: string;
  canonical_module_id: number;
  module_ids: number[];
  local_filenames: string[];
  instances: { module_id: number; path: string; sha256: string }[];
  legacy_ids?: number[];
}

export interface CatalogModule {
  id: number;
  key: string;
  title: string;
  category: string;
  subcategory: string | null;
  category_order: number;
  order: number;
  status: ModuleStatus;
  source_video_ids: number[];
}

export interface VideoCatalog {
  schema_version: number;
  modules: CatalogModule[];
  videos: Video[];
}

export interface CatalogSubcategory {
  key: string;
  label: string;
  modules: CatalogModule[];
}

export interface CatalogCategory {
  key: string;
  label: string;
  modules: CatalogModule[];
  subcategories: CatalogSubcategory[];
}

export interface PlaybackEntry {
  seconds: number;
  duration: number;
  updated: string;
}

export type PlaybackMap = Record<string, PlaybackEntry>;
