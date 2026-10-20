import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
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
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { tokens } from "@arset/theme";

import catalogJson from "./assets/video_catalog.json";
import type {
  Video,
  VideoCatalog,
  ModuleStatus,
  CatalogCategory,
  CatalogModule,
  PlaybackEntry,
  PlaybackMap,
} from "./src/types";
import { buildIndex, formatDuration } from "./src/catalog";
import {
  clearPlaybackPosition,
  loadCompleted,
  loadDownloads,
  loadPlayback,
  loadWatched,
  loadWatchlist,
  saveCompleted,
  saveDownload,
  savePlaybackPosition,
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
const totalVideos = catalog.videos.length;

// YouTube exige désormais un en-tête `Referer` valide pour les vidéos embarquées
// (sinon erreur 153). On utilise une origine factice valide au format URL.
const YOUTUBE_REFERER = "https://arsetviewer.arnaudsomville.fr";

const c = tokens.colors;
const sp = tokens.space;
const r = tokens.radius;
const f = tokens.fontSize;
const w = tokens.fontWeight;

interface ModuleEntry {
  key: string;
  title: string;
  status: ModuleStatus;
}

interface Section {
  title: string;
  count: number;
  data: ModuleEntry[];
}

function buildSections(query: string): Section[] {
  const q = query.trim().toLowerCase();
  const match = (t: string) => t.toLowerCase().includes(q);

  const sections: Section[] = [];
  for (const cat of index.categories) {
    if (cat.subcategories.length) {
      for (const sub of cat.subcategories) {
        const filtered = sub.modules.filter((m) => match(m.title));
        const data = filtered.map((m) => ({ key: m.key, title: m.title, status: m.status }));
        if (data.length) {
          sections.push({
            title: `${cat.label} — ${sub.label}`,
            count: filtered.length,
            data,
          });
        }
      }
    } else {
      const filtered = cat.modules.filter((m) => match(m.title));
      const data = filtered.map((m) => ({ key: m.key, title: m.title, status: m.status }));
      if (data.length) sections.push({ title: cat.label, count: filtered.length, data });
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
    <View style={styles.watchlistBlock}>
      <View style={styles.sectionTitleRow}>
        <Ionicons name="star" size={12} color={c.star} />
        <Text style={styles.sectionTitle}>Ma sélection</Text>
        <View style={styles.countPill}>
          <Text style={styles.countPillText}>{watchlist.size}</Text>
        </View>
      </View>

      {groups.length === 0 ? (
        <Text style={styles.watchlistEmpty}>
          Aucun module pour l'instant. Touchez l'étoile d'un module pour le retrouver ici.
        </Text>
      ) : (
        groups.map((cat) => {
          const count =
            cat.modules.length +
            cat.subcategories.reduce((n, sub) => n + sub.modules.length, 0);
          const isOpen = open[cat.title] ?? true;
          return (
            <View key={cat.title} style={styles.watchlistGroup}>
              <TouchableOpacity
                style={styles.watchlistCat}
                onPress={() => setOpen((o) => ({ ...o, [cat.title]: !isOpen }))}
              >
                <Ionicons
                  name={isOpen ? "chevron-down" : "chevron-forward"}
                  size={13}
                  color={c.textFaint}
                />
                <Text style={styles.watchlistCatName}>{cat.title}</Text>
                <Text style={styles.watchlistCount}>{count}</Text>
              </TouchableOpacity>
              {isOpen && (
                <View>
                  {cat.modules.map((m) => (
                    <WatchlistRow
                      key={m.key}
                      module={m}
                      onSelect={onSelect}
                      onToggle={onToggle}
                    />
                  ))}
                  {cat.subcategories.map((sub) => (
                    <View key={sub.key}>
                      <Text style={styles.watchlistSub}>{sub.title}</Text>
                      {sub.modules.map((m) => (
                        <WatchlistRow
                          key={m.key}
                          module={m}
                          onSelect={onSelect}
                          onToggle={onToggle}
                        />
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
    <View style={styles.watchlistRow}>
      <TouchableOpacity
        style={styles.moduleMain}
        onPress={() => onSelect({ key: module.key, title: module.title, status: module.status })}
      >
        <Text style={styles.moduleTitle} numberOfLines={2}>
          {module.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => onToggle(module.key)}
        accessibilityLabel="Retirer de ma sélection"
      >
        <Ionicons name="star" size={17} color={c.star} />
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

function formatPosition(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) return "0:00";
  const seconds = Math.floor(totalSeconds);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

function isResumable(saved: PlaybackEntry | undefined, duration: number): boolean {
  if (!saved || !Number.isFinite(saved.seconds) || saved.seconds < 5) return false;
  const total = saved.duration || duration || 0;
  if (total > 0 && saved.seconds > total * 0.95) return false;
  return true;
}

export default function App() {
  const [watched, setWatched] = useState<Set<string>>(new Set());
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [watchlist, setWatchlist] = useState<Set<string>>(new Set());
  const [playback, setPlayback] = useState<PlaybackMap>({});
  const [resumeChoice, setResumeChoice] = useState<"pending" | "resume" | "restart">(
    "restart",
  );
  const [startAt, setStartAt] = useState(0);
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
      setPlayback(await loadPlayback());
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
    const saved = playback[String(video.id)];
    const resumable = isResumable(saved, video.duration_seconds);
    setResumeChoice(resumable ? "pending" : "restart");
    setStartAt(0);
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

  const savePlayback = useCallback(
    async (id: number, seconds: number, duration: number) => {
      if (!Number.isFinite(seconds) || seconds < 1) return;
      setPlayback(await savePlaybackPosition(String(id), seconds, duration));
    },
    [],
  );

  const clearPlayback = useCallback(async (id: number) => {
    setPlayback(await clearPlaybackPosition(String(id)));
  }, []);

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
      if (nextWatched.has(sid)) await clearPlayback(id);
      setWatched(nextWatched);
      setCompleted(nextCompleted);
    },
    [completed, watched, clearPlayback],
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
    const isWatched = watched.has(String(currentVideo.id));
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => setScreen("module")}>
            <Ionicons name="chevron-back" size={18} color={c.accent} />
            <Text style={styles.back}>Module</Text>
          </TouchableOpacity>
          <View style={styles.flex1} />
          <TouchableOpacity
            style={[styles.pillBtn, isWatched && styles.pillBtnOn]}
            onPress={() => markVideo(currentVideo.id)}
          >
            <Ionicons
              name={isWatched ? "checkmark-circle" : "ellipse-outline"}
              size={14}
              color={isWatched ? c.success : c.textSecondary}
            />
            <Text style={[styles.pillBtnText, isWatched && styles.pillBtnTextOn]}>
              {isWatched ? "Vue" : "Marquer vue"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.playerTitle} numberOfLines={2}>
          {currentVideo.name}
        </Text>
        {resumeChoice === "pending" && playback[String(currentVideo.id)] ? (
          <View style={styles.resumePrompt}>
            <LinearGradient
              colors={["rgba(9,9,11,0.2)", "rgba(9,9,11,0.95)"]}
              style={StyleSheet.absoluteFill}
            />
            <Text style={styles.resumeLabel}>Reprendre la lecture ?</Text>
            <Text style={styles.resumeTime}>
              à {formatPosition(playback[String(currentVideo.id)].seconds)}
            </Text>
            <View style={styles.resumeActions}>
              <TouchableOpacity
                style={styles.resumeBtn}
                onPress={() => {
                  setStartAt(playback[String(currentVideo.id)].seconds);
                  setResumeChoice("resume");
                }}
              >
                <Ionicons name="play" size={14} color={c.accent} />
                <Text style={styles.resumeBtnText}>Reprendre</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.resumeBtnAlt}
                onPress={async () => {
                  await clearPlayback(currentVideo.id);
                  setStartAt(0);
                  setResumeChoice("restart");
                }}
              >
                <Text style={styles.resumeBtnAltText}>Recommencer</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : localUri ? (
          <LocalVideoPlayer
            uri={localUri}
            startAt={startAt}
            onProgress={(seconds, duration) =>
              savePlayback(currentVideo.id, seconds, duration || currentVideo.duration_seconds)
            }
            onEnded={() => clearPlayback(currentVideo.id)}
          />
        ) : (
          <YouTubePlayer
            videoId={currentVideo.youtube_video_id}
            startAt={startAt}
            onProgress={(seconds, duration) =>
              savePlayback(currentVideo.id, seconds, duration || currentVideo.duration_seconds)
            }
            onEnded={() => clearPlayback(currentVideo.id)}
          />
        )}
      </SafeAreaView>
    );
  }

  if (screen === "module" && currentModule) {
    const videos = index.videosByKey.get(currentModule.key) ?? [];
    const isDone = completed.has(currentModule.key);
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="light" />
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backBtn} onPress={() => setScreen("modules")}>
            <Ionicons name="chevron-back" size={18} color={c.accent} />
            <Text style={styles.back}>Modules</Text>
          </TouchableOpacity>
          <View style={styles.flex1} />
          <TouchableOpacity
            style={[styles.pillBtn, isDone && styles.pillBtnOn]}
            onPress={() => markModule(currentModule.key)}
          >
            <Ionicons
              name={isDone ? "checkmark-circle" : "checkmark"}
              size={14}
              color={isDone ? c.success : c.textSecondary}
            />
            <Text style={[styles.pillBtnText, isDone && styles.pillBtnTextOn]}>
              {isDone ? "Terminé" : "Terminer"}
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
            const seen = watched.has(String(item.id));
            return (
              <View style={styles.videoRow}>
                <TouchableOpacity
                  style={styles.videoThumbWrap}
                  onPress={() => openVideo(item)}
                  accessibilityLabel={`Lire ${item.name}`}
                >
                  <VideoThumb videoId={item.youtube_video_id} />
                  <View style={styles.videoPlay}>
                    <Ionicons name="play" size={13} color="#fff" />
                  </View>
                  <View style={styles.videoDuration}>
                    <Text style={styles.videoDurationText}>
                      {formatDuration(item.duration_seconds)}
                    </Text>
                  </View>
                  {seen && (
                    <View style={styles.videoSeen}>
                      <Ionicons name="checkmark" size={10} color={c.success} />
                    </View>
                  )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.videoInfo} onPress={() => openVideo(item)}>
                  <Text
                    style={[styles.videoTitle, seen && styles.videoTitleSeen]}
                    numberOfLines={2}
                  >
                    {item.name}
                  </Text>
                  <Text style={styles.videoMeta}>
                    {formatDuration(item.duration_seconds)}
                    {downloaded ? "  ·  téléchargé" : ""}
                  </Text>
                </TouchableOpacity>

                <DownloadButton
                  downloaded={downloaded}
                  entry={dl}
                  onDownload={() => startDownload(item)}
                />

                <TouchableOpacity style={styles.iconBtn} onPress={() => markVideo(item.id)}>
                  <Ionicons
                    name={seen ? "checkmark-circle" : "ellipse-outline"}
                    size={22}
                    color={seen ? c.success : c.textFaint}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Ionicons name="planet-outline" size={22} color={c.accent} />
              <Text style={styles.emptyTitle}>Aucune vidéo pour ce module</Text>
              <Text style={styles.emptyText}>Ce contenu est annoncé mais pas encore disponible.</Text>
            </View>
          }
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar style="light" />
      <View style={styles.homeHeader}>
        <Image source={require("./assets/earth-iss.jpg")} style={styles.headerBg} />
        <LinearGradient
          colors={["rgba(9,9,11,0.35)", "rgba(9,9,11,0.82)", c.bg]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.topBar}>
          <View style={styles.brandTile}>
            <Image source={require("./assets/arset-logo.png")} style={styles.brandLogo} />
          </View>
          <View style={styles.flex1}>
            <Text style={styles.header}>Earth Viewer</Text>
            <Text style={styles.sub}>Catalogue ARSET</Text>
          </View>
          <View style={styles.progressPill}>
            <Text style={styles.progressText}>
              <Text style={styles.progressStrong}>{watched.size}</Text> / {totalVideos}
            </Text>
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={15} color={c.textFaint} />
          <TextInput
            style={styles.search}
            placeholder="Rechercher un module…"
            placeholderTextColor={c.textFaint}
            value={query}
            onChangeText={setQuery}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")} accessibilityLabel="Effacer">
              <Ionicons name="close-circle" size={16} color={c.textFaint} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <SectionList
        sections={sections}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.key}
        keyboardShouldPersistTaps="handled"
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={
          <WatchlistBlock
            categories={index.categories}
            watchlist={watchlist}
            onSelect={openModule}
            onToggle={toggleWatchlist}
          />
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="search-outline" size={22} color={c.accent} />
            <Text style={styles.emptyTitle}>Aucun module trouvé</Text>
            <Text style={styles.emptyText}>Essayez un autre mot-clé.</Text>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <View style={styles.countPill}>
              <Text style={styles.countPillText}>{section.count}</Text>
            </View>
          </View>
        )}
        renderItem={({ item }) => {
          const starred = watchlist.has(item.key);
          const done = completed.has(item.key);
          return (
            <View style={styles.moduleRow}>
              <TouchableOpacity style={styles.moduleMain} onPress={() => openModule(item)}>
                <Text
                  style={[styles.moduleTitle, done && styles.moduleTitleDone]}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                {item.status !== "ok" && (
                  <Text style={styles.statusBadge}>
                    {item.status === "upcoming" ? "À venir" : "Partiel"}
                  </Text>
                )}
                {done && (
                  <Ionicons name="checkmark-circle" size={15} color={c.success} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconBtn}
                onPress={() => toggleWatchlist(item.key)}
                accessibilityLabel={
                  starred ? "Retirer de ma sélection" : "Ajouter à ma sélection"
                }
              >
                <Ionicons
                  name={starred ? "star" : "star-outline"}
                  size={18}
                  color={starred ? c.star : c.textFaint}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

function VideoThumb({ videoId }: { videoId: string }) {
  const [quality, setQuality] = useState<"sd" | "mq" | "none">("sd");
  if (!videoId || quality === "none") {
    return <View style={[styles.videoThumb, styles.videoThumbFallback]} />;
  }
  return (
    <Image
      source={{
        uri: `https://i.ytimg.com/vi/${videoId}/${quality === "sd" ? "sddefault" : "mqdefault"}.jpg`,
      }}
      style={styles.videoThumb}
      onLoad={(e) => {
        if (e.nativeEvent.source.width <= 160) {
          setQuality((q) => (q === "sd" ? "mq" : "none"));
        }
      }}
      onError={() => setQuality((q) => (q === "sd" ? "mq" : "none"))}
    />
  );
}

function LocalVideoPlayer({
  uri,
  startAt,
  onProgress,
  onEnded,
}: {
  uri: string;
  startAt: number;
  onProgress: (seconds: number, duration: number) => void;
  onEnded: () => void;
}) {
  const player = useVideoPlayer(uri, (p) => {
    p.loop = false;
    p.timeUpdateEventInterval = 5;
    p.play();
  });
  const seeded = useRef(false);
  const last = useRef(0);
  const progressRef = useRef(onProgress);
  progressRef.current = onProgress;
  const endedRef = useRef(onEnded);
  endedRef.current = onEnded;

  useEffect(() => {
    const seed = () => {
      if (seeded.current) return;
      player.currentTime = startAt;
      seeded.current = true;
    };
    if (player.status === "readyToPlay") seed();
    const statusSub = player.addListener("statusChange", ({ status }) => {
      if (status === "readyToPlay") seed();
    });
    const timeSub = player.addListener("timeUpdate", ({ currentTime }) => {
      const now = Date.now();
      if (now - last.current >= 5000) {
        last.current = now;
        progressRef.current(currentTime, player.duration);
      }
    });
    const endSub = player.addListener("playToEnd", () => endedRef.current());
    return () => {
      statusSub.remove();
      timeSub.remove();
      endSub.remove();
      if (player.currentTime > 1) {
        progressRef.current(player.currentTime, player.duration);
      }
    };
  }, [player, startAt]);

  return (
    <VideoView
      style={styles.webview}
      player={player}
      nativeControls
      contentFit="contain"
    />
  );
}

function YouTubePlayer({
  videoId,
  startAt,
  onProgress,
  onEnded,
}: {
  videoId: string;
  startAt: number;
  onProgress: (seconds: number, duration: number) => void;
  onEnded: () => void;
}) {
  const webRef = useRef<WebView>(null);
  const [ready, setReady] = useState(false);
  const last = useRef(0);
  const lastTime = useRef(0);
  const lastDuration = useRef(0);
  const progressRef = useRef(onProgress);
  progressRef.current = onProgress;
  const endedRef = useRef(onEnded);
  endedRef.current = onEnded;

  useEffect(() => {
    if (!ready) return;
    const retry = startAt > 5 ? setTimeout(() => {
      if (lastTime.current < 5) {
        webRef.current?.injectJavaScript(
          `if (window.player && window.player.seekTo) { window.player.seekTo(${startAt}, true); window.player.playVideo(); } true;`,
        );
      }
    }, 4000) : null;
    return () => {
      if (retry !== null) clearTimeout(retry);
    };
  }, [ready, startAt]);

  useEffect(() => {
    return () => {
      if (lastTime.current > 1) {
        progressRef.current(lastTime.current, lastDuration.current);
      }
    };
  }, []);

  const onMessage = (event: { nativeEvent: { data: string } }) => {
    let data: any;
    try {
      data = JSON.parse(event.nativeEvent.data);
    } catch {
      return;
    }
    if (data.type === "ready") {
      setReady(true);
      webRef.current?.injectJavaScript(
        `if (window.player && window.player.seekTo) { window.player.seekTo(${startAt}, true); window.player.playVideo(); } true;`,
      );
    }
    if (data.type === "ended") {
      endedRef.current();
    }
    if (data.type === "info") {
      const t = Number(data.currentTime);
      const d = Number(data.duration);
      if (Number.isFinite(t)) {
        lastTime.current = t;
        lastDuration.current = Number.isFinite(d) ? d : 0;
        const now = Date.now();
        if (now - last.current >= 5000) {
          last.current = now;
          progressRef.current(t, Number.isFinite(d) ? d : 0);
        }
      }
      if (data.playerState === 0) endedRef.current();
    }
  };

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <style>html,body{margin:0;height:100%;background:#000;overflow:hidden}#player{width:100%;height:100%}</style>
</head>
<body>
  <div id="player"></div>
  <script src="https://www.youtube.com/iframe_api"></script>
  <script>
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: '${videoId}',
        playerVars: { autoplay: 1, playsinline: 1, rel: 0, origin: '${YOUTUBE_REFERER}' },
        events: {
          onReady: function() { window.ReactNativeWebView.postMessage(JSON.stringify({type:'ready'})); },
          onStateChange: function(e) {
            if (e.data === 0) window.ReactNativeWebView.postMessage(JSON.stringify({type:'ended'}));
          }
        }
      });
      setInterval(function() {
        if (!player || !player.getCurrentTime) return;
        window.ReactNativeWebView.postMessage(JSON.stringify({
          type: 'info',
          currentTime: player.getCurrentTime(),
          duration: player.getDuration(),
          playerState: player.getPlayerState()
        }));
      }, 2000);
    }
  </script>
</body>
</html>`;

  return (
    <WebView
      ref={webRef}
      style={styles.webview}
      source={{ html, baseUrl: YOUTUBE_REFERER }}
      javaScriptEnabled
      domStorageEnabled
      thirdPartyCookiesEnabled
      mediaPlaybackRequiresUserAction={false}
      allowsFullscreenVideo
      allowsInlineMediaPlayback
      originWhitelist={["*"]}
      onMessage={onMessage}
      startInLoadingState
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
        <Ionicons name="checkmark" size={16} color={c.success} />
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
        <Ionicons name="refresh" size={15} color={c.danger} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.dlBadge} onPress={onDownload}>
      <Ionicons name="download-outline" size={16} color={c.accent} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: c.bg },
  flex1: { flex: 1 },

  /* ── Header / barres ─────────────────────────────────────────────────── */

  homeHeader: {
    paddingBottom: sp[3],
    borderBottomWidth: 1,
    borderBottomColor: c.border,
    backgroundColor: c.bg,
  },
  headerBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 210,
    resizeMode: "cover",
    opacity: 0.85,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: sp[3],
    paddingHorizontal: sp[4],
    paddingVertical: sp[3],
  },
  brandTile: {
    width: 40,
    height: 40,
    borderRadius: 11,
    padding: 3,
    backgroundColor: c.tile,
    alignItems: "center",
    justifyContent: "center",
  },
  brandLogo: { width: "100%", height: "100%", resizeMode: "contain" },
  header: {
    fontSize: f.lg,
    fontWeight: w.extrabold,
    color: c.text,
    letterSpacing: -0.2,
  },
  sub: {
    fontSize: f.xxs,
    color: c.textMuted,
    letterSpacing: 0.9,
    textTransform: "uppercase",
    marginTop: 1,
  },
  progressPill: {
    paddingHorizontal: sp[3],
    paddingVertical: 5,
    borderRadius: r.pill,
    borderWidth: 1,
    borderColor: c.border,
    backgroundColor: c.surface,
  },
  progressText: {
    fontSize: f.xs,
    color: c.textSecondary,
    fontVariant: ["tabular-nums"],
  },
  progressStrong: { color: c.text, fontWeight: w.bold },

  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingVertical: 4,
    paddingRight: 6,
  },
  back: { fontSize: f.base, color: c.accent, fontWeight: w.semibold },
  pillBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: sp[3],
    paddingVertical: 6,
    borderRadius: r.pill,
    borderWidth: 1,
    borderColor: c.border,
    backgroundColor: c.surface,
  },
  pillBtnOn: {
    backgroundColor: c.successSoft,
    borderColor: c.successBorder,
  },
  pillBtnText: { fontSize: f.xs, fontWeight: w.semibold, color: c.textSecondary },
  pillBtnTextOn: { color: c.success },

  /* ── Recherche ───────────────────────────────────────────────────────── */

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: sp[2],
    marginHorizontal: sp[4],
    marginTop: sp[1],
    paddingHorizontal: sp[3],
    height: 40,
    borderRadius: r.md,
    borderWidth: 1,
    borderColor: c.border,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  search: {
    flex: 1,
    fontSize: f.base,
    color: c.text,
    paddingVertical: 0,
  },

  /* ── Sections / listes ───────────────────────────────────────────────── */

  list: { paddingBottom: sp[10] },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: sp[4],
    marginTop: sp[5],
    marginBottom: sp[2],
  },
  sectionTitle: {
    fontSize: f.xxs,
    fontWeight: w.bold,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    color: c.textFaint,
    flex: 1,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: sp[2],
    paddingHorizontal: sp[4],
    paddingTop: sp[5],
    paddingBottom: sp[2],
    backgroundColor: c.bg,
  },
  sectionHeader: {
    flex: 1,
    fontSize: f.xxs,
    fontWeight: w.bold,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    color: c.accent,
    opacity: 0.85,
  },
  countPill: {
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: r.pill,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  countPillText: {
    fontSize: f.xxs,
    fontWeight: w.semibold,
    color: c.textMuted,
    fontVariant: ["tabular-nums"],
  },

  /* ── Watchlist ───────────────────────────────────────────────────────── */

  watchlistBlock: { paddingTop: sp[1] },
  watchlistGroup: {
    marginHorizontal: sp[4],
    marginBottom: sp[2],
    borderRadius: r.md,
    borderWidth: 1,
    borderColor: c.border,
    backgroundColor: c.surface,
    overflow: "hidden",
  },
  watchlistEmpty: {
    paddingHorizontal: sp[4],
    paddingVertical: sp[2],
    fontSize: f.sm,
    lineHeight: 18,
    color: c.textFaint,
  },
  watchlistCat: {
    flexDirection: "row",
    alignItems: "center",
    gap: sp[2],
    paddingHorizontal: sp[3],
    paddingVertical: sp[3],
  },
  watchlistCatName: { flex: 1, fontSize: f.md, fontWeight: w.semibold, color: c.textSecondary },
  watchlistCount: { fontSize: f.xs, color: c.textFaint, fontVariant: ["tabular-nums"] },
  watchlistSub: {
    paddingHorizontal: sp[3],
    paddingTop: sp[2],
    paddingBottom: 2,
    fontSize: f.xxs,
    color: c.accent,
    textTransform: "uppercase",
    letterSpacing: 0.9,
    opacity: 0.8,
  },
  watchlistRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: sp[1],
    paddingHorizontal: sp[3],
    paddingVertical: sp[2],
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.04)",
  },

  /* ── Lignes module ───────────────────────────────────────────────────── */

  moduleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: sp[1],
    marginHorizontal: sp[4],
    marginBottom: 6,
    paddingLeft: sp[3],
    paddingRight: 4,
    paddingVertical: sp[3],
    borderRadius: r.md,
    borderWidth: 1,
    borderColor: c.border,
    backgroundColor: c.surface,
  },
  moduleMain: { flex: 1, flexDirection: "row", alignItems: "center", gap: 6 },
  moduleTitle: { flexShrink: 1, fontSize: f.base, color: c.text, lineHeight: 19 },
  moduleTitleDone: { color: c.textMuted },
  statusBadge: {
    fontSize: f.xxs,
    color: c.textMuted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: r.pill,
    backgroundColor: "rgba(255,255,255,0.05)",
    overflow: "hidden",
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: r.sm,
  },

  /* ── Écran module / vidéos ───────────────────────────────────────────── */

  playerTitle: {
    paddingHorizontal: sp[4],
    paddingTop: sp[3],
    paddingBottom: sp[2],
    fontSize: f.xl,
    fontWeight: w.bold,
    color: c.text,
    letterSpacing: -0.3,
    lineHeight: 25,
  },
  videoList: { paddingBottom: sp[8], paddingTop: sp[2] },
  videoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: sp[2],
    marginHorizontal: sp[4],
    marginBottom: 8,
    padding: sp[2],
    borderRadius: r.md,
    borderWidth: 1,
    borderColor: c.border,
    backgroundColor: c.surface,
  },
  videoThumbWrap: {
    width: 104,
    height: 58,
    borderRadius: r.sm,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  videoThumb: { width: "100%", height: "100%" },
  videoThumbFallback: {
    backgroundColor: "#121216",
    borderWidth: 1,
    borderColor: c.border,
  },
  videoPlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 26,
    height: 26,
    marginTop: -13,
    marginLeft: -13,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 1,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.28)",
  },
  videoDuration: {
    position: "absolute",
    right: 3,
    bottom: 3,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.72)",
  },
  videoDurationText: { fontSize: 9, fontWeight: w.semibold, color: "#ededf0" },
  videoSeen: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52,211,153,0.2)",
    borderWidth: 1,
    borderColor: "rgba(52,211,153,0.5)",
  },
  videoInfo: { flex: 1, gap: 2 },
  videoTitle: { fontSize: f.md, color: c.text, lineHeight: 17 },
  videoTitleSeen: { color: c.textSecondary },
  videoMeta: { fontSize: f.xxs, color: c.textMuted, fontVariant: ["tabular-nums"] },

  /* ── Reprise / player ────────────────────────────────────────────────── */

  resumePrompt: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: sp[6],
    backgroundColor: "#000",
    overflow: "hidden",
  },
  resumeLabel: { fontSize: f.lg, fontWeight: w.bold, color: c.text },
  resumeTime: { fontSize: f.xxl, fontWeight: w.extrabold, color: c.accent },
  resumeActions: { flexDirection: "row", gap: sp[3], marginTop: sp[3] },
  resumeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: sp[5],
    paddingVertical: 10,
    borderRadius: r.md,
    backgroundColor: c.accentSoft,
    borderWidth: 1,
    borderColor: c.accentBorder,
  },
  resumeBtnText: { color: c.accent, fontWeight: w.bold, fontSize: f.base },
  resumeBtnAlt: {
    paddingHorizontal: sp[5],
    paddingVertical: 10,
    borderRadius: r.md,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: c.border,
  },
  resumeBtnAltText: { color: c.textSecondary, fontWeight: w.semibold, fontSize: f.base },
  webview: { flex: 1, backgroundColor: "#000" },

  /* ── Téléchargement ──────────────────────────────────────────────────── */

  dlBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: c.accentSoft,
    borderWidth: 1,
    borderColor: c.accentBorder,
  },
  dlText: { color: c.accent, fontWeight: w.bold, fontSize: f.xxs },
  dlDone: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: c.successSoft,
    borderWidth: 1,
    borderColor: c.successBorder,
  },

  /* ── États vides ─────────────────────────────────────────────────────── */

  empty: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginHorizontal: sp[4],
    marginTop: sp[6],
    padding: sp[6],
    borderRadius: r.md,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: c.border,
  },
  emptyTitle: { fontSize: f.base, fontWeight: w.semibold, color: c.textSecondary },
  emptyText: { fontSize: f.sm, color: c.textFaint, textAlign: "center" },
});
