/** Formate une durée en secondes -> "2h43" ou "43min". */
export function formatDuration(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return "—";
  }
  const seconds = Math.round(totalSeconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return `${hours}h${minutes.toString().padStart(2, "0")}`;
  }
  return `${minutes}min`;
}

/** Formate une position de lecture -> "12:34" ou "1:02:03". */
export function formatPosition(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) return "0:00";
  const seconds = Math.floor(totalSeconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(secs)}` : `${pad(minutes)}:${pad(secs)}`;
}

/** Extrait un identifiant vidéo YouTube depuis une URL `watch?v=...`. */
export function youtubeIdFromUrl(url: string): string {
  const m = /[?&]v=([A-Za-z0-9_-]{11})/.exec(url);
  return m ? m[1] : "";
}

/** URL d'embed YouTube. */
export function youtubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}
