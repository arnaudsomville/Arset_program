package expo.modules.youtubedl

import android.content.Context
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import com.yausername.youtubedl_android.YoutubeDL
import com.yausername.youtubedl_android.YoutubeDLRequest
import java.io.File

/**
 * Native bridge autour de `youtubedl-android` (yt-dlp + Python embarqués).
 * Le moteur embarque un runtime JS (quickjs), ce qui permet à yt-dlp de déchiffrer
 * les signatures YouTube sans curl-cffi.
 */
class YoutubedlModule : Module() {

  override fun definition() = ModuleDefinition {
    Name("Youtubedl")

    Events("progress")

    // Extrait Python + yt-dlp au premier appel (idempotent, ~quelques secondes).
    AsyncFunction("init") {
      try {
        YoutubeDL.getInstance().init(requireContext())
        true
      } catch (e: Exception) {
        throw RuntimeException("yt-dlp init failed: ${e.message}")
      }
    }

    // Télécharge `url` dans <app>/files/videos/<filename>.<ext>.
    // Bloque jusqu'à la fin ; émet des événements "progress" pendant le transfert.
    AsyncFunction("download") { url: String, filename: String, processId: String ->
      val dir = videosDir()
      if (!dir.exists()) dir.mkdirs()

      val request = YoutubeDLRequest(url)
      request.addOption("-o", File(dir, "$filename.%(ext)s").absolutePath)
      request.addOption("-f", "best[ext=mp4]/best")
      request.addOption("--no-playlist")
      request.addOption("--no-mtime")

      try {
        val response = YoutubeDL.getInstance().execute(request, processId) { progress, eta, _ ->
          sendEvent("progress", mapOf(
            "processId" to processId,
            "progress" to progress,
            "etaSeconds" to eta
          ))
        }

        val filePath = dir.listFiles()
          ?.filter { it.isFile && it.name.startsWith("$filename.") }
          ?.maxByOrNull { it.lastModified() }
          ?.absolutePath
          ?: ""

        mapOf(
          "exitCode" to response.exitCode,
          "filePath" to filePath,
          "out" to response.out,
          "err" to response.err
        )
      } catch (e: Exception) {
        throw RuntimeException("download failed: ${e.message}")
      }
    }

    AsyncFunction("cancel") { processId: String ->
      YoutubeDL.getInstance().destroyProcessById(processId)
    }
  }

  private fun videosDir(): File {
    val base = appContext.reactContext?.getExternalFilesDir(null)
      ?: throw IllegalStateException("react context not available")
    return File(base, "videos")
  }

  private fun requireContext(): Context =
    appContext.reactContext ?: throw IllegalStateException("react context not available")
}
