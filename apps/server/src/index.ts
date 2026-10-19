import fs from "node:fs";
import express, { type Request, type Response } from "express";
import cors from "cors";
import {
  buildCatalogIndex,
  formatDuration,
  parseCatalog,
  type CatalogIndex,
  type CatalogModule,
  type VideoView,
} from "@arset/core";
import { catalogFile, PORT } from "./config";
import {
  loadProgress,
  mutateProgress,
  now,
} from "./store";
import { isDownloaded, startDownload, statusOf, videoFile } from "./downloads";

function load(): CatalogIndex {
  const catalog = parseCatalog(JSON.parse(fs.readFileSync(catalogFile(), "utf8")));
  return buildCatalogIndex(catalog);
}

const index = load();

function videoView(id: number): VideoView | null {
  const video = index.videosById.get(id);
  if (!video) return null;
  const downloaded = isDownloaded(id);
  return {
    id: video.id,
    title: video.name,
    durationSeconds: Math.round(video.duration_seconds),
    youtubeUrl: video.youtube_url,
    youtubeVideoId: video.youtube_video_id,
    urlStatus: video.url_status,
    downloaded,
    streamUrl: `/api/videos/${video.id}/stream`,
  };
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get("/api/catalog", (_req, res) => {
  const categories = index.categories.map((cat) => ({
    key: cat.key,
    title: cat.label,
    modules: cat.modules.map(moduleSummary),
    subcategories: cat.subcategories.map((sub) => ({
      key: sub.key,
      title: sub.label,
      modules: sub.modules.map(moduleSummary),
    })),
  }));
  res.json(categories);
});

function moduleSummary(mod: CatalogModule) {
  const videos = index.videosByModuleKey.get(mod.key) ?? [];
  const durationSeconds = videos.reduce((s, v) => s + v.duration_seconds, 0);
  return {
    key: mod.key,
    title: mod.title,
    status: mod.status,
    videoCount: videos.length,
    durationSeconds: Math.round(durationSeconds),
  };
}

app.get("/api/modules/:key/videos", (req: Request, res: Response) => {
  const key = req.params.key;
  const mod = index.modulesByKey.get(key);
  if (!mod) return res.status(404).json({ error: "Module introuvable" });
  const videos = (index.videosByModuleKey.get(key) ?? [])
    .map((v) => videoView(v.id))
    .filter((v): v is VideoView => v !== null);
  res.json({ key: mod.key, title: mod.title, videos });
});

app.get("/api/progress", (_req, res) => {
  res.json(loadProgress());
});

// Module terminé ⟺ toutes ses vidéos vues. Les deux routes renvoient la
// progression complète ; les mises à jour sont propagées en cascade.
app.post("/api/progress/module/:key", (req: Request, res: Response) => {
  const key = req.params.key;
  const body = req.body ?? {};
  const ids = (index.videosByModuleKey.get(key) ?? []).map((v) => String(v.id));
  const result = mutateProgress((data) => {
    const completed =
      typeof body.completed === "boolean"
        ? body.completed
        : !(data.modules[key]?.completed ?? false);
    data.modules[key] = { completed, updated: now() };
    for (const id of ids) data.videos[id] = { watched: completed, updated: now() };
  });
  res.json(result);
});

app.post("/api/progress/video/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body ?? {};
  const result = mutateProgress((data) => {
    const watched =
      typeof body.watched === "boolean"
        ? body.watched
        : !(data.videos[id]?.watched ?? false);
    data.videos[id] = { watched, updated: now() };
    for (const [key, videos] of index.videosByModuleKey) {
      if (!videos.some((v) => String(v.id) === id)) continue;
      const allWatched =
        videos.length > 0 &&
        videos.every((v) => data.videos[String(v.id)]?.watched ?? false);
      data.modules[key] = { completed: allWatched, updated: now() };
    }
  });
  res.json(result);
});

app.post("/api/videos/:id/download", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const video = index.videosById.get(id);
  if (!video) return res.status(404).json({ error: "Vidéo introuvable" });
  const entry = startDownload(id, video.youtube_url);
  res.json(entry);
});

app.get("/api/videos/:id/download-status", (req: Request, res: Response) => {
  res.json(statusOf(req.params.id));
});

app.get("/api/videos/:id/stream", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!isDownloaded(id)) {
    return res.status(404).json({ error: "Vidéo non téléchargée" });
  }
  res.sendFile(videoFile(id));
});

app.listen(PORT, () => {
  console.log(`🌍 Arset server — http://localhost:${PORT}`);
  console.log(`   Données : ${require("node:os").homedir()}/.arset-data`);
});
