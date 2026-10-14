import { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";

import catalogJson from "./assets/video_catalog.json";
import learningPathJson from "./assets/learning_path.json";
import type { Video, VideoCatalog, LearningPath } from "./src/types";
import { buildIndex, categoryOf, formatDuration } from "./src/catalog";
import {
  loadCompleted,
  loadWatched,
  toggleCompleted,
  toggleWatched,
} from "./src/storage";

const catalog = catalogJson as unknown as VideoCatalog;
const learningPath = learningPathJson as unknown as LearningPath;
const index = buildIndex(catalog);

const CATEGORY_LABELS: Record<string, string> = {
  agriculture: "Agriculture",
  "air-quality": "Qualité de l'air",
  climate: "Climat",
  disasters: "Catastrophes",
  "ecological-conservation": "Écologie & Conservation",
  health: "Santé",
  "self-paced": "Auto-formation",
  "skill-building": "Compétences",
  "water-resources": "Ressources hydriques",
  "wildland-fire": "Feux de forêt",
};

interface ModuleEntry {
  key: string;
  title: string;
}

interface Section {
  title: string;
  data: ModuleEntry[];
}

function buildSections(query: string): Section[] {
  const q = query.trim().toLowerCase();
  const match = (t: string) => t.toLowerCase().includes(q);

  const sections: Section[] = [];
  for (const phase of learningPath.phases) {
    const data = phase.modules
      .filter((m) => match(m.title))
      .map((m) => ({ key: m.key, title: m.title }));
    if (data.length) sections.push({ title: phase.name, data });
  }

  const cats = new Map<string, ModuleEntry[]>();
  for (const [key, mod] of index.modulesByKey) {
    if (!key.startsWith("other_modules/")) continue;
    if (!match(mod.title)) continue;
    const cat = categoryOf(key);
    const list = cats.get(cat) ?? [];
    list.push({ key, title: mod.title });
    cats.set(cat, list);
  }
  for (const [cat, data] of cats) {
    sections.push({ title: `Complementaire — ${CATEGORY_LABELS[cat] ?? cat}`, data });
  }
  return sections;
}

type Screen = "modules" | "module" | "player";

export default function App() {
  const [watched, setWatched] = useState<Set<string>>(new Set());
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [screen, setScreen] = useState<Screen>("modules");
  const [currentModule, setCurrentModule] = useState<ModuleEntry | null>(null);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);

  useEffect(() => {
    (async () => {
      setWatched(await loadWatched());
      setCompleted(await loadCompleted());
    })();
  }, []);

  const sections = useMemo(() => buildSections(query), [query]);

  const openModule = (entry: ModuleEntry) => {
    setCurrentModule(entry);
    setScreen("module");
  };

  const openVideo = (video: Video) => {
    setCurrentVideo(video);
    setScreen("player");
  };

  if (screen === "player" && currentVideo) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => setScreen("module")}>
            <Text style={styles.back}>← Retour</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => setWatched(await toggleWatched(String(currentVideo.id)))}
          >
            <Text style={styles.action}>
              {watched.has(String(currentVideo.id)) ? "✓ Vue" : "Marquer vue"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.playerTitle} numberOfLines={2}>
          {currentVideo.name}
        </Text>
        <WebView
          style={styles.webview}
          source={{ uri: `https://www.youtube.com/embed/${currentVideo.youtube_video_id}?autoplay=1` }}
          allowsFullscreenVideo
          javaScriptEnabled
          mediaPlaybackRequiresUserAction={false}
        />
      </SafeAreaView>
    );
  }

  if (screen === "module" && currentModule) {
    const videos = index.videosByKey.get(currentModule.key) ?? [];
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => setScreen("modules")}>
            <Text style={styles.back}>← Modules</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => setCompleted(await toggleCompleted(currentModule.key))}
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
          renderItem={({ item }) => (
            <View style={styles.videoRow}>
              <TouchableOpacity style={styles.videoInfo} onPress={() => openVideo(item)}>
                <Text style={styles.videoTitle} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={styles.videoMeta}>{formatDuration(item.duration_seconds)}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => setWatched(await toggleWatched(String(item.id)))}
              >
                <Text style={styles.action}>
                  {watched.has(String(item.id)) ? "✓" : "○"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <Text style={styles.header}>Earth Viewer</Text>
        <Text style={styles.sub}>Parcours ARSET</Text>
      </View>
      <TextInput
        style={styles.search}
        placeholder="Rechercher un module…"
        placeholderTextColor="#4a5a70"
        value={query}
        onChangeText={setQuery}
      />
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.moduleRow} onPress={() => openModule(item)}>
            <Text style={styles.moduleTitle} numberOfLines={2}>
              {item.title}
            </Text>
            {completed.has(item.key) && <Text style={styles.doneMark}>✓</Text>}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
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
  videoInfo: { flex: 1 },
  videoTitle: { fontSize: 14, color: "#e8edf5", marginBottom: 4 },
  videoMeta: { fontSize: 12, color: "#6a7a90" },
});
