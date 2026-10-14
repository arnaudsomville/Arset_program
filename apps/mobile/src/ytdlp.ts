import Constants, { ExecutionEnvironment } from "expo-constants";
import YtDlp, {
  YtDlpError,
  type DownloadOptions,
  type DownloadTask,
} from "ytdlp-react-native";

/** true si l'app tourne dans Expo Go (module natif yt-dlp indisponible). */
export function isExpoGo(): boolean {
  return Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
}

/** Démarre un téléchargement via le module natif yt-dlp. */
export function startDownload(options: DownloadOptions): Promise<DownloadTask> {
  return YtDlp.download(options);
}

/** Transforme une erreur en message lisible (français). */
export function humanizeDownloadError(e: unknown): string {
  if (e instanceof YtDlpError) {
    if (e.code === "UNSUPPORTED_PLATFORM") {
      return "Téléchargement indisponible dans Expo Go. Installe un build de développement : make android-eas (APK) ou make android-local (USB).";
    }
    const labels: Record<string, string> = {
      INVALID_URL: "URL de vidéo invalide.",
      EXTRACTION_FAILED: "Impossible de lire la vidéo (extraction échouée).",
      DOWNLOAD_FAILED: "Le téléchargement a échoué.",
      FORMAT_UNAVAILABLE: "Aucun format téléchargeable disponible.",
      NETWORK_ERROR: "Erreur réseau. Vérifie ta connexion.",
      AUTHENTICATION_REQUIRED: "Vidéo protégée (connexion requise).",
      GEO_RESTRICTED: "Vidéo non disponible dans ta région.",
      PRIVATE_CONTENT: "Vidéo privée.",
      AGE_RESTRICTED: "Vidéo soumise à une restriction d'âge.",
      STORAGE_ERROR: "Erreur de stockage sur l'appareil.",
      CANCELLED: "Téléchargement annulé.",
    };
    return labels[e.code] ?? e.message;
  }
  return e instanceof Error ? e.message : String(e);
}
