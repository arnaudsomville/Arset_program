import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  formatDuration,
  youtubeEmbedUrl,
  type ModuleStatus,
  type VideoView,
} from "@arset/core";
import { api, supportsLocalDownload } from "./api";
import type {
  CatalogCategory,
  CatalogModuleSummary,
  DownloadEntry,
  ProgressData,
} from "./api";

interface ModuleSelection {
  key: string;
  title: string;
}

function statusLabel(status: ModuleStatus): string | null {
  if (status === "upcoming") return "à venir";
  if (status === "partial") return "partiel";
  return null;
}

export default function App() {
  const [catalog, setCatalog] = useState<CatalogCategory[]>([]);
  const [progress, setProgress] = useState<ProgressData>({
    modules: {},
    videos: {},
  });
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [selected, setSelected] = useState<ModuleSelection | null>(null);
  const [videos, setVideos] = useState<VideoView[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [cat, prog, wl] = await Promise.all([
          api.catalog(),
          api.progress(),
          api.watchlist(),
        ]);
        setCatalog(cat);
        setProgress(prog);
        setWatchlist(wl);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    })();
  }, []);

  const selectModule = useCallback(async (key: string, title: string) => {
    setSelected({ key, title });
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

  const toggleModule = useCallback(async (key: string) => {
    setProgress(await api.toggleModule(key));
  }, []);

  const toggleVideo = useCallback(async (id: number) => {
    setProgress(await api.toggleVideo(id));
  }, []);

  const toggleWatchlist = useCallback(async (key: string) => {
    setWatchlist(await api.toggleWatchlist(key));
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
        <span className="sub">Catalogue ARSET</span>
        <span className="badge">{watchedCount} vidéos vues</span>
      </header>

      {error && (
        <div className="error-banner" onClick={() => setError(null)}>
          ⚠️ {error} (cliquer pour fermer)
        </div>
      )}

      <div className="layout">
        <Sidebar
          catalog={catalog}
          progress={progress}
          watchlist={watchlist}
          search={search}
          setSearch={setSearch}
          selectedKey={selected?.key}
          onSelect={selectModule}
          onToggleModule={toggleModule}
          onToggleWatchlist={toggleWatchlist}
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
                <p className="empty">Aucune vidéo pour ce module (à venir).</p>
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
              <p>Choisis un module dans le catalogue, par catégorie.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

interface SidebarProps {
  catalog: CatalogCategory[];
  progress: ProgressData;
  watchlist: string[];
  search: string;
  setSearch: (s: string) => void;
  selectedKey?: string;
  onSelect: (key: string, title: string) => void;
  onToggleModule: (key: string) => void;
  onToggleWatchlist: (key: string) => void;
}

function Sidebar(props: SidebarProps) {
  const {
    catalog,
    progress,
    watchlist,
    search,
    setSearch,
    selectedKey,
    onSelect,
    onToggleModule,
    onToggleWatchlist,
  } = props;
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const q = search.trim().toLowerCase();
  const match = (title: string) => title.toLowerCase().includes(q);

  const filtered = catalog
    .map((cat) => ({
      ...cat,
      modules: cat.modules.filter((m) => match(m.title)),
      subcategories: cat.subcategories
        .map((sub) => ({ ...sub, modules: sub.modules.filter((m) => match(m.title)) }))
        .filter((sub) => sub.modules.length > 0),
    }))
    .filter((cat) => cat.modules.length > 0 || cat.subcategories.length > 0);

  return (
    <aside className="sidebar">
      <h3 className="section-title">My Watchlist</h3>
      <WatchlistTree
        catalog={catalog}
        watchlist={watchlist}
        progress={progress}
        selectedKey={selectedKey}
        onSelect={onSelect}
        onToggleModule={onToggleModule}
        onToggleWatchlist={onToggleWatchlist}
      />

      <h3 className="section-title" style={{ marginTop: "1rem" }}>
        Recherche
      </h3>
      <input
        className="search"
        placeholder="Nom du module…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3 className="section-title" style={{ marginTop: "1rem" }}>
        Catalogue
      </h3>

      {filtered.map((cat) => {
        const isOpen = open[cat.key] ?? false;
        const count =
          cat.modules.length +
          cat.subcategories.reduce((n, sub) => n + sub.modules.length, 0);
        return (
          <div className="cat" key={cat.key}>
            <div className="cat-head" onClick={() => setOpen((o) => ({ ...o, [cat.key]: !isOpen }))}>
              <span className={`arrow ${isOpen ? "open" : ""}`}>▶</span>
              <span className="cat-name">{cat.title}</span>
              <span className="cat-count">{count}</span>
            </div>
            {isOpen && (
              <div className="cat-list">
                {cat.modules.map((m) => (
                  <ModuleRow
                    key={m.key}
                    module={m}
                    completed={!!progress.modules[m.key]?.completed}
                    active={selectedKey === m.key}
                    onSelect={() => onSelect(m.key, m.title)}
                    onToggle={() => onToggleModule(m.key)}
                    inWatchlist={watchlist.includes(m.key)}
                    onToggleWatchlist={() => onToggleWatchlist(m.key)}
                  />
                ))}
                {cat.subcategories.map((sub) => (
                  <div key={sub.key}>
                    <div className="phase-head">{sub.title}</div>
                    {sub.modules.map((m) => (
                      <ModuleRow
                        key={m.key}
                        module={m}
                        completed={!!progress.modules[m.key]?.completed}
                        active={selectedKey === m.key}
                        onSelect={() => onSelect(m.key, m.title)}
                        onToggle={() => onToggleModule(m.key)}
                        inWatchlist={watchlist.includes(m.key)}
                        onToggleWatchlist={() => onToggleWatchlist(m.key)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}

function WatchlistTree({
  catalog,
  watchlist,
  progress,
  selectedKey,
  onSelect,
  onToggleModule,
  onToggleWatchlist,
}: {
  catalog: CatalogCategory[];
  watchlist: string[];
  progress: ProgressData;
  selectedKey?: string;
  onSelect: (key: string, title: string) => void;
  onToggleModule: (key: string) => void;
  onToggleWatchlist: (key: string) => void;
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const saved = new Set(watchlist);

  const groups = catalog
    .map((cat) => ({
      title: cat.title,
      modules: cat.modules.filter((m) => saved.has(m.key)),
      subcategories: cat.subcategories
        .map((sub) => ({
          key: sub.key,
          title: sub.title,
          modules: sub.modules.filter((m) => saved.has(m.key)),
        }))
        .filter((sub) => sub.modules.length > 0),
    }))
    .filter((cat) => cat.modules.length > 0 || cat.subcategories.length > 0);

  if (!groups.length) {
    return <p className="watchlist-empty">Aucun module dans la watchlist.</p>;
  }

  const renderModule = (m: CatalogModuleSummary) => (
    <ModuleRow
      key={m.key}
      module={m}
      completed={!!progress.modules[m.key]?.completed}
      active={selectedKey === m.key}
      inWatchlist
      onSelect={() => onSelect(m.key, m.title)}
      onToggle={() => onToggleModule(m.key)}
      onToggleWatchlist={() => onToggleWatchlist(m.key)}
    />
  );

  return (
    <>
      {groups.map((cat) => {
        const count =
          cat.modules.length +
          cat.subcategories.reduce((n, sub) => n + sub.modules.length, 0);
        const isOpen = open[cat.title] ?? false;
        return (
          <div className="cat" key={cat.title}>
            <div
              className="cat-head"
              onClick={() => setOpen((o) => ({ ...o, [cat.title]: !isOpen }))}
            >
              <span className={`arrow ${isOpen ? "open" : ""}`}>▶</span>
              <span className="cat-name">{cat.title}</span>
              <span className="cat-count">{count}</span>
            </div>
            {isOpen && (
              <div className="cat-list">
                {cat.modules.map(renderModule)}
                {cat.subcategories.map((sub) => (
                  <div key={sub.key}>
                    <div className="phase-head">{sub.title}</div>
                    {sub.modules.map(renderModule)}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

function ModuleRow({
  module,
  completed,
  active,
  inWatchlist,
  onSelect,
  onToggle,
  onToggleWatchlist,
}: {
  module: CatalogModuleSummary;
  completed: boolean;
  active: boolean;
  inWatchlist: boolean;
  onSelect: () => void;
  onToggle: () => void;
  onToggleWatchlist: () => void;
}) {
  const badge = statusLabel(module.status);
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
      <span className="title">{module.title}</span>
      {badge && (
        <span
          className="tag"
          style={{ marginLeft: 4, opacity: 0.8, fontSize: 11 }}
          title={module.status}
        >
          {badge}
        </span>
      )}
      <button
        className={`star ${inWatchlist ? "is-starred" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleWatchlist();
        }}
        title={inWatchlist ? "Retirer de ma watchlist" : "Ajouter à ma watchlist"}
        aria-label={inWatchlist ? "Retirer de ma watchlist" : "Ajouter à ma watchlist"}
      >
        {inWatchlist ? "★" : "☆"}
      </button>
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
