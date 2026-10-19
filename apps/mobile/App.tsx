import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  BackHandler,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { useVideoPlayer, VideoView } from "expo-video";

import catalogJson from "./assets/video_catalog.json";
import type { Video, VideoCatalog, ModuleStatus, CatalogCategory, CatalogModule } from "./src/types";
import { buildIndex, formatDuration } from "./src/catalog";
import {
  loadCompleted,
  loadDownloads,
  loadWatched,
  loadWatchlist,
  saveCompleted,
  saveDownload,
  saveWatched,
  toggleWatchlist as toggleWatchlistStored,
} from "./src/storage";
import {
  downloadVideo,
  humanizeDownloadError,
  initYtDlp,
  isExpoGo,
  onProgress,
} from "./src/ytdlp";

const catalog = catalogJson as unknown as VideoCatalog;
const index = buildIndex(catalog);

// YouTube exige désormais un en-tête `Referer` valide pour les vidéos embarquées
// (sinon erreur 153). On utilise une origine factice valide au format URL.
const YOUTUBE_REFERER = "https://arsetviewer.arnaudsomville.fr";

interface ModuleEntry {
  key: string;
  title: string;
  status: ModuleStatus;
}

interface Section {
  title: string;
  data: ModuleEntry[];
}

function buildSections(query: string): Section[] {
  const q = query.trim().toLowerCase();
  const match = (t: string) => t.toLowerCase().includes(q);

  const sections: Section[] = [];
  for (const cat of index.categories) {
    if (cat.subcategories.length) {
      for (const sub of cat.subcategories) {
        const data = sub.modules
          .filter((m) => match(m.title))
          .map((m) => ({ key: m.key, title: m.title, status: m.status }));
        if (data.length) sections.push({ title: `${cat.label} — ${sub.label}`, data });
      }
    } else {
      const data = cat.modules
        .filter((m) => match(m.title))
        .map((m) => ({ key: m.key, title: m.title, status: m.status }));
      if (data.length) sections.push({ title: cat.label, data });
    }
  }
  return sections;
}

function WatchlistBlock({
  categories,
  watchlist,
  onSelect,
  onToggle,
}: {
  categories: CatalogCategory[];
  watchlist: Set<string>;
  onSelect: (entry: ModuleEntry) => void;
  onToggle: (key: string) => void;
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const groups = categories
    .map((cat) => ({
      title: cat.label,
      modules: cat.modules.filter((m) => watchlist.has(m.key)),
      subcategories: cat.subcategories
        .map((sub) => ({
          key: sub.key,
          title: sub.label,
          modules: sub.modules.filter((m) => watchlist.has(m.key)),
        }))
        .filter((sub) => sub.modules.length > 0),
    }))
    .filter((cat) => cat.modules.length > 0 || cat.subcategories.length > 0);

  return (
    <View>
      <Text style={styles.watchlistTitle}>My Watchlist</Text>
      {groups.length === 0 ? (
        <Text style={styles.watchlistEmpty}>Aucun module dans la watchlist.</Text>
      ) : (
        groups.map((cat) => {
          const count =
            cat.modules.length +
            cat.subcategories.reduce((n, sub) => n + sub.modules.length, 0);
          const isOpen = open[cat.title] ?? false;
          return (
            <View key={cat.title}>
              <TouchableOpacity
                style={styles.watchlistCat}
                onPress={() => setOpen((o) => ({ ...o, [cat.title]: !isOpen }))}
              >
                <Text style={styles.watchlistArrow}>{isOpen ? "▾" : "▸"}</Text>
                <Text style={styles.watchlistCatName}>{cat.title}</Text>
                <Text style={styles.watchlistCount}>{count}</Text>
              </TouchableOpacity>
              {isOpen && (
                <View>
                  {cat.modules.map((m) => (
                    <WatchlistRow key={m.key} module={m} onSelect={onSelect} onToggle={onToggle} />
                  ))}
                  {cat.subcategories.map((sub) => (
                    <View key={sub.key}>
                      <Text style={styles.watchlistSub}>{sub.title}</Text>
                      {sub.modules.map((m) => (
                        <WatchlistRow key={m.key} module={m} onSelect={onSelect} onToggle={onToggle} />
                      ))}
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })
      )}
    </View>
  );
}

function WatchlistRow({
  module,
  onSelect,
  onToggle,
}: {
  module: CatalogModule;
  onSelect: (entry: ModuleEntry) => void;
  onToggle: (key: string) => void;
}) {
  return (
    <View style={styles.moduleRow}>
      <TouchableOpacity
        style={styles.moduleMain}
        onPress={() => onSelect({ key: module.key, title: module.title, status: module.status })}
      >
        <Text style={styles.moduleTitle} numberOfLines={2}>
          {module.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.starBtn}
        onPress={() => onToggle(module.key)}
        accessibilityLabel="Retirer de ma watchlist"
      >
        <Text style={[styles.star, styles.starActive]}>★</Text>
      </TouchableOpacity>
    </View>
  );
}

type Screen = "modules" | "module" | "player";

type DownloadState = {
  status: "downloading" | "error";
  progress: number;
  error?: string;
};

function watchUrl(video: Video): string {
  return video.youtube_url || `https://www.youtube.com/watch?v=${video.youtube_video_id}`;
}

export default function App() {
  const [watched, setWatched] = useState<Set<string>>(new Set());
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [watchlist, setWatchlist] = useState<Set<string>>(new Set());
  const [downloadedFiles, setDownloadedFiles] = useState<Record<string, string>>({});
  const [query, setQuery] = useState("");
  const [screen, setScreen] = useState<Screen>("modules");
  const [currentModule, setCurrentModule] = useState<ModuleEntry | null>(null);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [downloads, setDownloads] = useState<Record<string, DownloadState>>({});

  useEffect(() => {
    (async () => {
      setWatched(await loadWatched());
      setCompleted(await loadCompleted());
      setWatchlist(await loadWatchlist());
      setDownloadedFiles(await loadDownloads());
    })();
  }, []);

  useEffect(() => {
    initYtDlp().catch(() => {});
    const sub = onProgress((event) => {
      setDownloads((d) => {
        const current = d[event.processId];
        if (!current || current.status !== "downloading") return d;
        return {
          ...d,
          [event.processId]: { status: "downloading", progress: event.progress / 100 },
        };
      });
    });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      if (screen === "player") {
        setScreen("module");
        return true;
      }
      if (screen === "module") {
        setScreen("modules");
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [screen]);

  const sections = useMemo(() => buildSections(query), [query]);

  const openModule = (entry: ModuleEntry) => {
    setCurrentModule(entry);
    setScreen("module");
  };

  const openVideo = (video: Video) => {
    setCurrentVideo(video);
    setScreen("player");
  };

  // Module terminé ⟺ toutes ses vidéos vues. Les deux sens sont propagés.
  const markModule = useCallback(
    async (key: string) => {
      const videos = index.videosByKey.get(key) ?? [];
      const nextCompleted = new Set(completed);
      const nextWatched = new Set(watched);
      const nowCompleted = !nextCompleted.has(key);
      if (nowCompleted) nextCompleted.add(key);
      else nextCompleted.delete(key);
      for (const v of videos) {
        const id = String(v.id);
        if (nowCompleted) nextWatched.add(id);
        else nextWatched.delete(id);
      }
      await Promise.all([saveCompleted(nextCompleted), saveWatched(nextWatched)]);
      setCompleted(nextCompleted);
      setWatched(nextWatched);
    },
    [completed, watched],
  );

  const markVideo = useCallback(
    async (id: number) => {
      const sid = String(id);
      const nextWatched = new Set(watched);
      if (nextWatched.has(sid)) nextWatched.delete(sid);
      else nextWatched.add(sid);
      const nextCompleted = new Set(completed);
      for (const [key, videos] of index.videosByKey) {
        if (!videos.some((v) => String(v.id) === sid)) continue;
        const allWatched =
          videos.length > 0 &&
          videos.every((v) => nextWatched.has(String(v.id)));
        if (allWatched) nextCompleted.add(key);
        else nextCompleted.delete(key);
      }
      await Promise.all([saveWatched(nextWatched), saveCompleted(nextCompleted)]);
      setWatched(nextWatched);
      setCompleted(nextCompleted);
    },
    [completed, watched],
  );

  const toggleWatchlist = useCallback(async (key: string) => {
    setWatchlist(await toggleWatchlistStored(key));
  }, []);

  const startDownload = useCallback(async (video: Video) => {
    const id = String(video.id);
    if (isExpoGo()) {
      Alert.alert(
        "Téléchargement indisponible",
        "Le téléchargement ne fonctionne pas dans Expo Go. Installe un build de développement : make android-eas (APK) ou make android-local (USB).",
      );
      return;
    }

    setDownloads((d) => ({ ...d, [id]: { status: "downloading", progress: 0 } }));
    try {
      const result = await downloadVideo(video.id, watchUrl(video));
      if (result.filePath) {
        setDownloadedFiles(await saveDownload(id, `file://${result.filePath}`));
      }
      setDownloads((d) => {
        const next = { ...d };
        delete next[id];
        return next;
      });
    } catch (e) {
      const msg = humanizeDownloadError(e);
      setDownloads((d) => ({
        ...d,
        [id]: { status: "error", progress: 0, error: msg },
      }));
      Alert.alert("Échec du téléchargement", msg);
    }
  }, []);

  if (screen === "player" && currentVideo) {
    const localUri = downloadedFiles[String(currentVideo.id)];
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => setScreen("module")}>
            <Text style={styles.back}>← Retour</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => markVideo(currentVideo.id)}
          >
            <Text style={styles.action}>
              {watched.has(String(currentVideo.id)) ? "✓ Vue" : "Marquer vue"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.playerTitle} numberOfLines={2}>
          {currentVideo.name}
        </Text>
        {localUri ? (
          <LocalVideoPlayer uri={localUri} />
        ) : (
          <WebView
            style={styles.webview}
            source={{
              uri: `https://www.youtube.com/embed/${currentVideo.youtube_video_id}?autoplay=1&playsinline=1`,
              headers: { Referer: YOUTUBE_REFERER },
            }}
            javaScriptEnabled
            domStorageEnabled
            thirdPartyCookiesEnabled
            mediaPlaybackRequiresUserAction={false}
            allowsFullscreenVideo
            allowsInlineMediaPlayback
            originWhitelist={["*"]}
            startInLoadingState
          />
        )}
      </SafeAreaView>
    );
  }

  if (screen === "module" && currentModule) {
    const videos = index.videosByKey.get(currentModule.key) ?? [];
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => setScreen("modules")}>
            <Text style={styles.back}>← Modules</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => markModule(currentModule.key)}
          >
            <Text style={styles.action}>
              {completed.has(currentModule.key) ? "✓ Terminé" : "Terminer"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.playerTitle}>{currentModule.title}</Text>
        <FlatList
          data={videos}
          keyExtractor={(v) => String(v.id)}
          contentContainerStyle={styles.videoList}
          renderItem={({ item }) => {
            const dl = downloads[String(item.id)];
            const downloaded = !!downloadedFiles[String(item.id)];
            return (
              <View style={styles.videoRow}>
                <TouchableOpacity
                  style={styles.videoInfo}
                  onPress={() => openVideo(item)}
                >
                  <Text style={styles.videoTitle} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <Text style={styles.videoMeta}>
                    {formatDuration(item.duration_seconds)}
                    {downloaded ? "  ·  ✓ téléchargé" : ""}
                  </Text>
                </TouchableOpacity>

                <DownloadButton
                  downloaded={downloaded}
                  entry={dl}
                  onDownload={() => startDownload(item)}
                />

                <TouchableOpacity
                  onPress={() => markVideo(item.id)}
                >
                  <Text style={styles.action}>
                    {watched.has(String(item.id)) ? "✓" : "○"}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <Text style={styles.header}>Earth Viewer</Text>
        <Text style={styles.sub}>Catalogue ARSET</Text>
      </View>

      <SectionList
        sections={sections}
        ListHeaderComponent={
          <>
            <WatchlistBlock
              categories={index.categories}
              watchlist={watchlist}
              onSelect={openModule}
              onToggle={toggleWatchlist}
            />
            <TextInput
              style={styles.search}
              placeholder="Rechercher un module…"
              placeholderTextColor="#4a5a70"
              value={query}
              onChangeText={setQuery}
            />
          </>
        }
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.moduleRow}>
            <TouchableOpacity style={styles.moduleMain} onPress={() => openModule(item)}>
              <Text style={styles.moduleTitle} numberOfLines={2}>
                {item.title}
              </Text>
              {item.status !== "ok" && (
                <Text style={styles.statusBadge}>
                  {item.status === "upcoming" ? "à venir" : "partiel"}
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.starBtn}
              onPress={() => toggleWatchlist(item.key)}
              accessibilityLabel={
                watchlist.has(item.key)
                  ? "Retirer de ma watchlist"
                  : "Ajouter à ma watchlist"
              }
            >
              <Text style={[styles.star, watchlist.has(item.key) && styles.starActive]}>
                {watchlist.has(item.key) ? "★" : "☆"}
              </Text>
            </TouchableOpacity>
            {completed.has(item.key) && <Text style={styles.doneMark}>✓</Text>}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function LocalVideoPlayer({ uri }: { uri: string }) {
  const player = useVideoPlayer(uri, (p) => {
    p.loop = false;
    p.play();
  });
  return (
    <VideoView
      style={styles.webview}
      player={player}
      nativeControls
      contentFit="contain"
    />
  );
}

function DownloadButton({
  downloaded,
  entry,
  onDownload,
}: {
  downloaded: boolean;
  entry: DownloadState | undefined;
  onDownload: () => void;
}) {
  if (downloaded) {
    return (
      <View style={styles.dlDone}>
        <Text style={styles.dlDoneText}>✓</Text>
      </View>
    );
  }
  if (entry?.status === "downloading") {
    return (
      <View style={styles.dlBadge}>
        <Text style={styles.dlText}>{Math.round(entry.progress * 100)}%</Text>
      </View>
    );
  }
  if (entry?.status === "error") {
    return (
      <TouchableOpacity style={styles.dlBadge} onPress={onDownload}>
        <Text style={styles.dlTextError}>↻</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.dlBadge} onPress={onDownload}>
      <Text style={styles.dlText}>⬇</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0a0e17" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(100,180,255,0.15)",
    backgroundColor: "#0a0e17",
  },
  header: { fontSize: 18, fontWeight: "800", color: "#64b5f6" },
  sub: { flex: 1, fontSize: 12, color: "#8899b0" },
  back: { fontSize: 15, color: "#64b5f6" },
  action: { fontSize: 14, color: "#42e695", fontWeight: "600" },
  search: {
    margin: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    color: "#e8edf5",
  },
  watchlistTitle: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 6,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#f5c542",
  },
  watchlistEmpty: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 12,
    color: "#6a7a90",
  },
  watchlistCat: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  watchlistArrow: { width: 16, fontSize: 11, color: "#4a6080" },
  watchlistCatName: { flex: 1, fontSize: 13, fontWeight: "600", color: "#b0c0d8" },
  watchlistCount: { fontSize: 11, color: "#6a7a90" },
  watchlistSub: {
    paddingHorizontal: 22,
    paddingVertical: 6,
    fontSize: 11,
    color: "#64b5f6",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  moduleMain: { flex: 1, flexDirection: "row", alignItems: "center" },
  starBtn: { paddingHorizontal: 8, paddingVertical: 4 },
  star: { fontSize: 18, color: "#4a5a70" },
  starActive: { color: "#f5c542" },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#64b5f6",
    backgroundColor: "#0a0e17",
  },
  moduleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.04)",
  },
  moduleTitle: { flex: 1, fontSize: 14, color: "#e8edf5" },
  statusBadge: {
    fontSize: 10,
    color: "#8899b0",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginLeft: 6,
  },
  doneMark: { color: "#42e695", fontWeight: "800", fontSize: 15 },
  playerTitle: { padding: 16, fontSize: 16, fontWeight: "700", color: "#e8edf5" },
  webview: { flex: 1, backgroundColor: "#000" },
  videoList: { paddingBottom: 24 },
  videoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.04)",
  },
  videoInfo: { flex: 1, marginRight: 8 },
  videoTitle: { fontSize: 14, color: "#e8edf5", marginBottom: 4 },
  videoMeta: { fontSize: 12, color: "#6a7a90" },
  dlBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(100,180,255,0.12)",
    marginHorizontal: 6,
  },
  dlText: { color: "#64b5f6", fontWeight: "700", fontSize: 12 },
  dlTextError: { color: "#ff9b9b", fontWeight: "700", fontSize: 14 },
  dlDone: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(66,230,149,0.15)",
    marginHorizontal: 6,
  },
  dlDoneText: { color: "#42e695", fontWeight: "800", fontSize: 14 },
});
