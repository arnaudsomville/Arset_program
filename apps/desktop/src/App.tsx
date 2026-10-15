import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  formatDuration,
  youtubeEmbedUrl,
  type LearningPath,
  type VideoView,
} from "@arset/core";
import { api, supportsLocalDownload } from "./api";
import type {
  ComplementaryGroup,
  DownloadEntry,
  ProgressData,
} from "./api";

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

function categoryLabel(cat: string): string {
  return CATEGORY_LABELS[cat] ?? cat;
}

interface ModuleSelection {
  key: string;
  title: string;
  source: "path" | "complementary";
}

export default function App() {
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [complementary, setComplementary] = useState<ComplementaryGroup[]>([]);
  const [progress, setProgress] = useState<ProgressData>({
    modules: {},
    videos: {},
  });
  const [selected, setSelected] = useState<ModuleSelection | null>(null);
  const [videos, setVideos] = useState<VideoView[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [lp, comp, prog] = await Promise.all([
          api.learningPath(),
          api.complementary(),
          api.progress(),
        ]);
        setLearningPath(lp);
        setComplementary(comp);
        setProgress(prog);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    })();
  }, []);

  const selectModule = useCallback(async (key: string, title: string, source: "path" | "complementary") => {
    setSelected({ key, title, source });
    setLoadingVideos(true);
    try {
      const res = await api.moduleVideos(key);
      setVideos(res.videos);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setVideos([]);
    } finally {
      setLoadingVideos(false);
    }
  }, []);

  const toggleModule = useCallback(
    async (key: string) => {
      const res = await api.toggleModule(key);
      setProgress((p) => ({
        ...p,
        modules: { ...p.modules, [key]: { completed: res.completed, updated: new Date().toISOString() } },
      }));
    },
    [],
  );

  const toggleVideo = useCallback(async (id: number) => {
    const res = await api.toggleVideo(id);
    setProgress((p) => ({
      ...p,
      videos: { ...p.videos, [String(id)]: { watched: res.watched, updated: new Date().toISOString() } },
    }));
  }, []);

  const markVideoDownloaded = useCallback((id: number) => {
    setVideos((vs) => vs.map((v) => (v.id === id ? { ...v, downloaded: true } : v)));
  }, []);

  const watchedCount = useMemo(
    () => Object.values(progress.videos).filter((v) => v.watched).length,
    [progress],
  );

  return (
    <div className="app">
      <header>
        <h1>Earth Viewer</h1>
        <span className="sub">Parcours ARSET</span>
        <span className="badge">{watchedCount} vidéos vues</span>
      </header>

      {error && (
        <div className="error-banner" onClick={() => setError(null)}>
          ⚠️ {error} (cliquer pour fermer)
        </div>
      )}

      <div className="layout">
        <Sidebar
          learningPath={learningPath}
          complementary={complementary}
          progress={progress}
          search={search}
          setSearch={setSearch}
          selectedKey={selected?.key}
          onSelect={selectModule}
          onToggleModule={toggleModule}
        />

        <main className="main">
          {selected ? (
            <>
              <div className="module-header">
                <h2>{selected.title}</h2>
                <button
                  className={`done-btn ${progress.modules[selected.key]?.completed ? "is-done" : ""}`}
                  onClick={() => toggleModule(selected.key)}
                >
                  {progress.modules[selected.key]?.completed ? "✓ Terminé" : "Marquer terminé"}
                </button>
              </div>

              {loadingVideos ? (
                <p className="empty">Chargement…</p>
              ) : videos.length === 0 ? (
                <p className="empty">Aucune vidéo pour ce module.</p>
              ) : (
                <div className="grid">
                  {videos.map((v) => (
                    <VideoCard
                      key={v.id}
                      video={v}
                      watched={!!progress.videos[String(v.id)]?.watched}
                      onToggleWatched={toggleVideo}
                      onDownloaded={markVideoDownloaded}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="empty">
              <div className="empty-icon">🛰️</div>
              <h3>Sélectionne un module</h3>
              <p>Choisis dans le parcours ou dans les modules complémentaires.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

interface SidebarProps {
  learningPath: LearningPath | null;
  complementary: ComplementaryGroup[];
  progress: ProgressData;
  search: string;
  setSearch: (s: string) => void;
  selectedKey?: string;
  onSelect: (key: string, title: string, source: "path" | "complementary") => void;
  onToggleModule: (key: string) => void;
}

function Sidebar(props: SidebarProps) {
  const { learningPath, complementary, progress, search, setSearch, selectedKey, onSelect, onToggleModule } = props;

  const q = search.trim().toLowerCase();
  const filteredGroups = complementary
    .map((g) => ({
      ...g,
      modules: g.modules.filter((m) => m.title.toLowerCase().includes(q)),
    }))
    .filter((g) => g.modules.length > 0);

  return (
    <aside className="sidebar">
      <h3 className="section-title">Parcours</h3>

      {learningPath?.phases.map((phase) => {
        const modules = phase.modules.filter((m) =>
          m.title.toLowerCase().includes(q),
        );
        if (modules.length === 0) return null;
        return (
          <div className="phase" key={phase.name}>
            <div className="phase-head">{phase.name}</div>
            {modules.map((m) => (
              <ModuleRow
                key={m.key}
                title={m.title}
                completed={!!progress.modules[m.key]?.completed}
                active={selectedKey === m.key}
                onSelect={() => onSelect(m.key, m.title, "path")}
                onToggle={() => onToggleModule(m.key)}
              />
            ))}
          </div>
        );
      })}

      <h3 className="section-title" style={{ marginTop: "1rem" }}>Recherche</h3>
      <input
        className="search"
        placeholder="Nom du module…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3 className="section-title" style={{ marginTop: "1rem" }}>
        Modules complémentaires
      </h3>
      {filteredGroups.map((group) => (
        <CollapsibleCategory
          key={group.category}
          group={group}
          progress={progress}
          selectedKey={selectedKey}
          onSelect={onSelect}
        />
      ))}
    </aside>
  );
}

function ModuleRow({
  title,
  completed,
  active,
  onSelect,
  onToggle,
}: {
  title: string;
  completed: boolean;
  active: boolean;
  onSelect: () => void;
  onToggle: () => void;
}) {
  return (
    <div className={`module-row ${completed ? "done" : ""} ${active ? "active" : ""}`} onClick={onSelect}>
      <button
        className="check"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        ✓
      </button>
      <span className="title">{title}</span>
    </div>
  );
}

function CollapsibleCategory({
  group,
  progress,
  selectedKey,
  onSelect,
}: {
  group: ComplementaryGroup;
  progress: ProgressData;
  selectedKey?: string;
  onSelect: (key: string, title: string, source: "path" | "complementary") => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="cat">
      <div className="cat-head" onClick={() => setOpen((o) => !o)}>
        <span className={`arrow ${open ? "open" : ""}`}>▶</span>
        <span className="cat-name">{categoryLabel(group.category)}</span>
        <span className="cat-count">{group.modules.length}</span>
      </div>
      {open && (
        <div className="cat-list">
          {group.modules.map((m) => (
            <ModuleRow
              key={m.key}
              title={m.title}
              completed={!!progress.modules[m.key]?.completed}
              active={selectedKey === m.key}
              onSelect={() => onSelect(m.key, m.title, "complementary")}
              onToggle={() => onSelect(m.key, m.title, "complementary")}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function VideoCard({
  video,
  watched,
  onToggleWatched,
  onDownloaded,
}: {
  video: VideoView;
  watched: boolean;
  onToggleWatched: (id: number) => void;
  onDownloaded: (id: number) => void;
}) {
  const [dl, setDl] = useState<DownloadEntry | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, []);

  const poll = useCallback(
    (id: number) => {
      timerRef.current = window.setInterval(async () => {
        try {
          const status = await api.downloadStatus(id);
          if (status.status === "done") {
            if (timerRef.current !== null) window.clearInterval(timerRef.current);
            setDl(null);
            onDownloaded(id);
          } else if (status.status === "error") {
            if (timerRef.current !== null) window.clearInterval(timerRef.current);
            setDl(status);
          } else {
            setDl(status);
          }
        } catch {
          /* keep polling */
        }
      }, 1000);
    },
    [onDownloaded],
  );

  const startDownload = useCallback(async () => {
    setDl({ status: "downloading", progress: 0 });
    try {
      const entry = await api.download(video.id);
      if (entry.status === "done") {
        setDl(null);
        onDownloaded(video.id);
      } else if (entry.status === "error") {
        setDl(entry);
      } else {
        setDl(entry);
        poll(video.id);
      }
    } catch (e) {
      setDl({ status: "error", progress: 0, error: e instanceof Error ? e.message : String(e) });
    }
  }, [video.id, poll, onDownloaded]);

  const downloading = dl?.status === "downloading";

  return (
    <div className={`card ${watched ? "seen" : ""}`}>
      <div className="player">
        {video.downloaded ? (
          <video controls preload="metadata" src={video.streamUrl} />
        ) : video.youtubeVideoId ? (
          <iframe
            src={youtubeEmbedUrl(video.youtubeVideoId)}
            title={video.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="no-player">Aucune source vidéo</div>
        )}
      </div>

      <div className="card-body">
        <div className="card-title">{video.title}</div>
        <div className="card-meta">{formatDuration(video.durationSeconds)}</div>

        <div className="card-actions">
          {supportsLocalDownload &&
            (video.downloaded ? (
              <span className="tag tag-done">✓ Téléchargée</span>
            ) : (
              <button className="btn" onClick={startDownload} disabled={downloading}>
                {downloading ? `Téléchargement… ${Math.round(dl?.progress ?? 0)}%` : "⬇ Télécharger"}
              </button>
            ))}
          {supportsLocalDownload && dl?.status === "error" && (
            <span className="tag tag-error">{dl.error}</span>
          )}
          <button className={`watch-btn ${watched ? "is-seen" : ""}`} onClick={() => onToggleWatched(video.id)}>
            {watched ? "✓ Vue" : "Marquer vue"}
          </button>
        </div>
      </div>
    </div>
  );
}
