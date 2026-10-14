import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { videosDir } from "./config";

export type DownloadStatus = "idle" | "downloading" | "done" | "error";

export interface DownloadEntry {
  status: DownloadStatus;
  progress: number;
  error?: string;
}

const jobs = new Map<string, DownloadEntry>();

export function videoFile(id: number | string): string {
  return path.join(videosDir(), `${id}.mp4`);
}

export function isDownloaded(id: number | string): boolean {
  return fs.existsSync(videoFile(id));
}

export function statusOf(id: number | string): DownloadEntry {
  const key = String(id);
  const running = jobs.get(key);
  if (running) return running;
  return isDownloaded(id) ? { status: "done", progress: 100 } : { status: "idle", progress: 0 };
}

export function startDownload(id: number, url: string): DownloadEntry {
  const key = String(id);
  const existing = jobs.get(key);
  if (existing?.status === "downloading") return existing;
  if (isDownloaded(id)) return { status: "done", progress: 100 };

  fs.mkdirSync(videosDir(), { recursive: true });
  const out = videoFile(id);
  const entry: DownloadEntry = { status: "downloading", progress: 0 };
  jobs.set(key, entry);

  const args = [
    "-f",
    "best[ext=mp4]/best",
    "--js-runtimes",
    "node",
    "--newline",
    "--no-playlist",
    "-o",
    out,
    url,
  ];

  let child;
  try {
    child = spawn("yt-dlp", args, { stdio: ["ignore", "pipe", "pipe"] });
  } catch (err) {
    entry.status = "error";
    entry.error = err instanceof Error ? err.message : String(err);
    return entry;
  }

  let tail = "";
  const onChunk = (chunk: Buffer) => {
    tail += chunk.toString();
    const m = /\[download\]\s+([\d.]+)%/.exec(tail);
    if (m) entry.progress = parseFloat(m[1]);
    if (tail.length > 4000) tail = tail.slice(-4000);
  };

  child.stdout.on("data", onChunk);
  child.stderr.on("data", onChunk);

  child.on("close", (code) => {
    if (code === 0 && fs.existsSync(out)) {
      entry.status = "done";
      entry.progress = 100;
    } else {
      entry.status = "error";
      entry.error = `yt-dlp a échoué (code ${code}).`;
    }
  });

  child.on("error", (err) => {
    entry.status = "error";
    entry.error = err.message;
  });

  return entry;
}
