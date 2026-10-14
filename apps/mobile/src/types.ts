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
}

export interface CatalogModule {
  id: number;
  key: string;
  title: string;
  source_video_ids: number[];
}

export interface VideoCatalog {
  schema_version: number;
  modules: CatalogModule[];
  videos: Video[];
}

export interface LearningPathModule {
  key: string;
  title: string;
}

export interface LearningPhase {
  name: string;
  modules: LearningPathModule[];
}

export interface LearningPath {
  phases: LearningPhase[];
}
