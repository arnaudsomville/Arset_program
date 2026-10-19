export type UrlStatus = "verified" | "duration_verified" | "manual_verified";
export type ModuleStatus = "ok" | "partial" | "upcoming";

export interface VideoInstance {
  module_id: number;
  path: string;
  sha256: string;
}

export interface Video {
  id: number;
  sha256: string;
  name: string;
  duration_seconds: number;
  youtube_url: string;
  youtube_video_id: string;
  url_status: UrlStatus;
  canonical_module_id: number;
  module_ids: number[];
  local_filenames: string[];
  instances: VideoInstance[];
  /** Anciens ids d'entrées fusionnées (dédoublonnage par YouTube ID). */
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

export interface CatalogSummary {
  local_video_instances: number;
  unique_sources: number;
  duplicate_instances_collapsed: number;
  url_status_counts: Record<UrlStatus, number>;
}

export interface VideoCatalog {
  schema_version: number;
  generated_at: string;
  deduplication: {
    method: string;
    canonical_precedence: string[];
    scope: string;
  };
  summary: CatalogSummary;
  modules: CatalogModule[];
  videos: Video[];
}

/** Groupe de modules d'une sous-catégorie (ex. Disasters > Floods). */
export interface CatalogSubcategory {
  key: string;
  label: string;
  modules: CatalogModule[];
}

/** Groupe de modules d'une grande catégorie (ex. Disasters). */
export interface CatalogCategory {
  key: string;
  label: string;
  modules: CatalogModule[];
  subcategories: CatalogSubcategory[];
}

/** Vidéo enrichie, prête pour l'UI. */
export interface VideoView {
  id: number;
  title: string;
  durationSeconds: number;
  youtubeUrl: string;
  youtubeVideoId: string;
  urlStatus: UrlStatus;
  downloaded: boolean;
  streamUrl: string;
}
