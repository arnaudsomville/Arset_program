import Constants, { ExecutionEnvironment } from "expo-constants";
import Youtubedl from "../modules/youtubedl";
import type { DownloadResult, ProgressEvent } from "../modules/youtubedl";

/** true si l'app tourne dans Expo Go (module natif yt-dlp indisponible). */
export function isExpoGo(): boolean {
  return Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
}

/** S'abonne aux événements de progression des téléchargements. */
export function onProgress(
  listener: (event: ProgressEvent) => void,
): { remove(): void } {
  return Youtubedl.addListener("progress", listener);
}

/** Initialise le runtime yt-dlp (extraction de Python, idempotent). */
export async function initYtDlp(): Promise<void> {
  if (isExpoGo()) return;
  await Youtubedl.init();
}

/** Télécharge une vidéo. Résout quand le fichier est prêt ; rejette en cas d'échec. */
export async function downloadVideo(
  videoId: number,
  url: string,
): Promise<DownloadResult> {
  await Youtubedl.init();
  return Youtubedl.download(url, String(videoId), String(videoId));
}

export function cancelDownload(processId: string): Promise<boolean> {
  return Youtubedl.cancel(processId);
}

/** Transforme une erreur en message lisible (français). */
export function humanizeDownloadError(e: unknown): string {
  if (isExpoGo()) {
    return "Download unavailable in Expo Go. Install a development build: make android-eas (APK) or make android-local (USB).";
  }
  return e instanceof Error ? e.message : String(e);
}
