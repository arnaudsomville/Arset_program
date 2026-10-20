import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import {
  formatDuration,
  formatPosition,
  youtubeEmbedUrl,
  type ModuleStatus,
  type VideoView,
} from "@arset/core";
import {
  AlertTriangleIcon as AlertTriangle,
  CheckCircleIcon as CheckCircle2,
  CheckIcon as Check,
  ChevronRightIcon as ChevronRight,
  CompassIcon as Compass,
  DownloadIcon as Download,
  LoaderIcon as Loader2,
  MenuIcon as Menu,
  PlayIcon as Play,
  SatelliteIcon as Satellite,
  SearchIcon as Search,
  StarIcon as Star,
  XIcon as X,
} from "./icons";
import { api, supportsLocalDownload } from "./api";
import type {
  CatalogCategory,
  CatalogModuleSummary,
  CatalogStats,
  DownloadEntry,
  PlaybackEntry,
  PlaybackMap,
  ProgressData,
} from "./api";

interface ModuleSelection {
  key: string;
  title: string;
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function statusLabel(status: ModuleStatus): string | null {
  if (status === "upcoming") return "upcoming";
  if (status === "partial") return "partial";
  return null;
}

function countModules(catalog: CatalogCategory[]): number {
  return catalog.reduce(
    (n, cat) =>
      n +
      cat.modules.length +
      cat.subcategories.reduce((m, sub) => m + sub.modules.length, 0),
    0,
  );
}

function countVideos(catalog: CatalogCategory[]): number {
  const all = catalog.flatMap((cat) => [
    ...cat.modules,
    ...cat.subcategories.flatMap((sub) => sub.modules),
  ]);
  return all.reduce((n, m) => n + m.videoCount, 0);
}

function moduleContext(
  catalog: CatalogCategory[],
  key: string,
): { category: string; subcategory: string | null } {
  for (const cat of catalog) {
    if (cat.modules.some((m) => m.key === key)) {
      return { category: cat.title, subcategory: null };
    }
    for (const sub of cat.subcategories) {
      if (sub.modules.some((m) => m.key === key)) {
        return { category: cat.title, subcategory: sub.title };
      }
    }
  }
  return { category: "", subcategory: null };
}

// YouTube renvoie une vignette grise 120×90 (HTTP 404) quand la qualité demandée
// n'existe pas : on démarre en 640×480 et on contrôle la taille au chargement.
function thumbnailUrl(videoId: string, quality: "sd" | "mq"): string {
  return `https://i.ytimg.com/vi/${videoId}/${quality === "sd" ? "sddefault" : "mqdefault"}.jpg`;
}

export default function App() {
  const [catalog, setCatalog] = useState<CatalogCategory[]>([]);
  const [stats, setStats] = useState<CatalogStats | null>(null);
  const [progress, setProgress] = useState<ProgressData>({
    modules: {},
    videos: {},
  });
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [playback, setPlayback] = useState<PlaybackMap>({});
  const [selected, setSelected] = useState<ModuleSelection | null>(null);
  const [videos, setVideos] = useState<VideoView[]>([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const [cat, prog, wl, pb, catStats] = await Promise.all([
          api.catalog(),
          api.progress(),
          api.watchlist(),
          api.playback(),
          api.stats(),
        ]);
        setCatalog(cat);
        setStats(catStats);
        setProgress(prog);
        setWatchlist(wl);
        setPlayback(pb);
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
      }
    })();
  }, []);

  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const selectModule = useCallback(async (key: string, title: string) => {
    setSelected({ key, title });
    setSidebarOpen(false);
    setLoadingVideos(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const savePlayback = useCallback(
    async (id: number, seconds: number, duration: number) => {
      if (!Number.isFinite(seconds) || seconds < 1) return;
      setPlayback(await api.savePlayback(id, seconds, duration));
    },
    [],
  );

  const clearPlayback = useCallback(async (id: number) => {
    setPlayback(await api.savePlayback(id, 0, 0));
  }, []);

  const toggleVideo = useCallback(
    async (id: number) => {
      const next = await api.toggleVideo(id);
      setProgress(next);
      if (next.videos[String(id)]?.watched) await clearPlayback(id);
    },
    [clearPlayback],
  );

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

  const moduleCount = stats?.modules ?? countModules(catalog);
  const videoCount = stats?.videos ?? countVideos(catalog);

  const context = useMemo(
    () => (selected ? moduleContext(catalog, selected.key) : null),
    [catalog, selected],
  );

  const firstModule = useMemo(() => {
    const cat = catalog.find(
      (c) => c.modules.length > 0 || c.subcategories.some((s) => s.modules.length > 0),
    );
    if (!cat) return null;
    return cat.modules[0] ?? cat.subcategories.flatMap((s) => s.modules)[0] ?? null;
  }, [catalog]);

  const watchedInModule = useMemo(
    () => videos.filter((v) => progress.videos[String(v.id)]?.watched).length,
    [videos, progress],
  );

  return (
    <div className="app">
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop-map" />
        <div className="backdrop-horizon" />
        <div className="backdrop-glow" />
      </div>

      <header className="topbar">
        <button
          className="icon-btn menu-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open the catalogue"
        >
          <Menu size={18} />
        </button>

        <div className="brand">
          <span className="brand-tile">
            <img src={asset("img/arset-logo.png")} alt="Logo ARSET" />
          </span>
          <span className="brand-text">
            <span className="brand-title">Earth Viewer</span>
            <span className="brand-sub">ARSET Catalogue</span>
          </span>
        </div>

        <div className="topbar-spacer" />

        <div
          className="progress-pill"
          title={`${watchedCount} videos watched out of ${videoCount}`}
        >
          <span className="progress-count">
            <strong>{watchedCount}</strong>
            <span className="progress-total"> / {videoCount}</span>
          </span>
          <span className="progress-unit">videos</span>
          <span className="progress-track">
            <span
              className="progress-fill"
              style={{ width: `${videoCount ? (watchedCount / videoCount) * 100 : 0}%` }}
            />
          </span>
        </div>
      </header>

      <div className="layout">
        <Sidebar
          catalog={catalog}
          progress={progress}
          watchlist={watchlist}
          search={search}
          setSearch={setSearch}
          searchRef={searchRef}
          selectedKey={selected?.key}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSelect={selectModule}
          onToggleModule={toggleModule}
          onToggleWatchlist={toggleWatchlist}
        />

        <div
          className={`sidebar-scrim ${sidebarOpen ? "is-open" : ""}`}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />

        <main className="main">
          {selected ? (
            <>
              <div className="module-header">
                <div className="module-heading">
                  <div className="breadcrumb">
                    {context?.category && <span>{context.category}</span>}
                    {context?.subcategory && (
                      <>
                        <span className="sep">/</span>
                        <span>{context.subcategory}</span>
                      </>
                    )}
                  </div>
                  <h2>{selected.title}</h2>
                  {videos.length > 0 && (
                    <div className="module-progress">
                      <span>
                        {watchedInModule} / {videos.length} videos watched
                      </span>
                      <span className="progress-track">
                        <span
                          className="progress-fill"
                          style={{ width: `${(watchedInModule / videos.length) * 100}%` }}
                        />
                      </span>
                    </div>
                  )}
                </div>
                <button
                  className={`done-btn ${progress.modules[selected.key]?.completed ? "is-done" : ""}`}
                  onClick={() => toggleModule(selected.key)}
                >
                  {progress.modules[selected.key]?.completed ? (
                    <>
                      <CheckCircle2 /> Complete
                    </>
                  ) : (
                    <>
                      <Check /> Mark complete
                    </>
                  )}
                </button>
              </div>

              {loadingVideos ? (
                <div className="grid" aria-label="Loading videos">
                  {[0, 1, 2].map((i) => (
                    <div className="skeleton-card" key={i}>
                      <div className="skeleton skeleton-media" />
                      <div className="skeleton skeleton-line" />
                      <div className="skeleton skeleton-line short" />
                    </div>
                  ))}
                </div>
              ) : videos.length === 0 ? (
                <div className="empty">
                  <span className="empty-icon">
                    <Satellite size={20} />
                  </span>
                  <h3>No videos for this module</h3>
                  <p>This content is announced but not available yet.</p>
                </div>
              ) : (
                <div className="grid">
                  {videos.map((v) => (
                    <VideoCard
                      key={v.id}
                      video={v}
                      watched={!!progress.videos[String(v.id)]?.watched}
                      saved={playback[String(v.id)]}
                      onToggleWatched={toggleVideo}
                      onDownloaded={markVideoDownloaded}
                      onSavePlayback={savePlayback}
                      onClearPlayback={clearPlayback}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <section className="hero">
              <img className="hero-bg" src={asset("img/earth-iss.jpg")} alt="" />
              <div className="hero-overlay" />
              <div className="hero-content">
                <span className="hero-logo-tile">
                  <img src={asset("img/arset-logo.png")} alt="Logo ARSET" />
                </span>
                <h2>Earth observation, step by step.</h2>
                <p>
                  Browse the full NASA ARSET curriculum: remote sensing, air quality,
                  wildfires, water, climate and urbanisation. Pick a module to open its
                  videos.
                </p>
                <div className="hero-actions">
                  {firstModule && (
                    <button
                      className="btn btn-primary"
                      onClick={() => selectModule(firstModule.key, firstModule.title)}
                    >
                      <Play /> Start with the fundamentals
                    </button>
                  )}
                  <button
                    className="btn"
                    onClick={() => {
                      setSidebarOpen(true);
                      window.setTimeout(() => searchRef.current?.focus(), 260);
                    }}
                  >
                    <Compass /> Browse the catalogue
                  </button>
                </div>
                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>{moduleCount}</strong>
                    <span>modules</span>
                  </div>
                  <div className="hero-stat">
                    <strong>{videoCount}</strong>
                    <span>videos</span>
                  </div>
                  <div className="hero-stat">
                    <strong>{watchedCount}</strong>
                    <span>watched</span>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      {error && (
        <div className="toast" role="alert">
          <AlertTriangle />
          <span>{error}</span>
          <button
            className="icon-btn toast-close"
            onClick={() => setError(null)}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

interface SidebarProps {
  catalog: CatalogCategory[];
  progress: ProgressData;
  watchlist: string[];
  search: string;
  setSearch: (s: string) => void;
  searchRef: RefObject<HTMLInputElement>;
  selectedKey?: string;
  open: boolean;
  onClose: () => void;
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
    searchRef,
    selectedKey,
    open,
    onClose,
    onSelect,
    onToggleModule,
    onToggleWatchlist,
  } = props;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

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
    <aside className={`sidebar ${open ? "is-open" : ""}`} aria-label="Catalogue">
      <div className="sidebar-top">
        <h3 className="section-title" style={{ margin: 0 }}>
          Search
        </h3>
        <button
          className="icon-btn sidebar-close"
          onClick={onClose}
          aria-label="Close the catalogue"
        >
          <X size={16} />
        </button>
      </div>

      <div className="search-box">
        <Search />
        <input
          ref={searchRef}
          className="search"
          placeholder="Module name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3 className="section-title">
        My watchlist
        <span className="section-count">{watchlist.length}</span>
      </h3>
      <WatchlistTree
        catalog={catalog}
        watchlist={watchlist}
        progress={progress}
        selectedKey={selectedKey}
        onSelect={onSelect}
        onToggleModule={onToggleModule}
        onToggleWatchlist={onToggleWatchlist}
      />

      <h3 className="section-title">Catalogue</h3>

      {filtered.map((cat) => {
        const isOpen = q ? true : (expanded[cat.key] ?? false);
        const count =
          cat.modules.length +
          cat.subcategories.reduce((n, sub) => n + sub.modules.length, 0);
        return (
          <div className="cat" key={cat.key}>
            <div
              className="cat-head"
              onClick={() => setExpanded((o) => ({ ...o, [cat.key]: !isOpen }))}
            >
              <span className={`arrow ${isOpen ? "open" : ""}`}>
                <ChevronRight size={13} />
              </span>
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
    return (
      <p className="watchlist-empty">
        No modules yet. Click the star on a module to find it here.
      </p>
    );
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
        const isOpen = open[cat.title] ?? true;
        return (
          <div className="cat" key={cat.title}>
            <div
              className="cat-head"
              onClick={() => setOpen((o) => ({ ...o, [cat.title]: !isOpen }))}
            >
              <span className={`arrow ${isOpen ? "open" : ""}`}>
                <ChevronRight size={13} />
              </span>
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
    <div
      className={`module-row ${completed ? "done" : ""} ${active ? "active" : ""}`}
      onClick={onSelect}
    >
      <button
        className="check"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-label={completed ? "Mark as not complete" : "Mark as complete"}
      >
        <Check />
      </button>
      <span className="status-dot" aria-hidden="true" />
      <span className="title">{module.title}</span>
      {badge && <span className="tag">{badge}</span>}
      <button
        className={`star ${inWatchlist ? "is-starred" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleWatchlist();
        }}
        title={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
        aria-label={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
      >
        <Star size={15} />
      </button>
    </div>
  );
}

function isResumable(saved: PlaybackEntry | undefined, duration: number): boolean {
  if (!saved || !Number.isFinite(saved.seconds) || saved.seconds < 5) return false;
  const total = saved.duration || duration || 0;
  if (total > 0 && saved.seconds > total * 0.95) return false;
  return true;
}

function VideoCard({
  video,
  watched,
  saved,
  onToggleWatched,
  onDownloaded,
  onSavePlayback,
  onClearPlayback,
}: {
  video: VideoView;
  watched: boolean;
  saved?: PlaybackEntry;
  onToggleWatched: (id: number) => void;
  onDownloaded: (id: number) => void;
  onSavePlayback: (id: number, seconds: number, duration: number) => void;
  onClearPlayback: (id: number) => void;
}) {
  const initialSaved = useRef(saved).current;
  const resumable = isResumable(initialSaved, video.durationSeconds);
  const [playing, setPlaying] = useState(false);
  const [showResume, setShowResume] = useState(resumable);
  const [startAt, setStartAt] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [thumbQuality, setThumbQuality] = useState<"sd" | "mq" | "none">("sd");
  const [dl, setDl] = useState<DownloadEntry | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (initialSaved && !resumable) onClearPlayback(video.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, []);

  const handleProgress = useCallback(
    (seconds: number, duration: number) =>
      onSavePlayback(video.id, seconds, duration || video.durationSeconds),
    [video.id, video.durationSeconds, onSavePlayback],
  );
  const handleEnded = useCallback(
    () => onClearPlayback(video.id),
    [video.id, onClearPlayback],
  );

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

  const play = (from = 0, autoplay = false) => {
    setShowResume(false);
    setStartAt(from);
    setAutoPlay(autoplay);
    setPlaying(true);
  };

  const handleThumbClick = () => {
    if (showResume) return;
    play();
  };

  const media = playing ? (
    video.downloaded ? (
      <LocalVideo
        src={video.streamUrl}
        startAt={startAt}
        autoPlay={autoPlay}
        onProgress={handleProgress}
        onEnded={handleEnded}
      />
    ) : video.youtubeVideoId ? (
      <YouTubePlayer
        videoId={video.youtubeVideoId}
        title={video.title}
        startAt={startAt}
        autoPlay={autoPlay}
        onProgress={handleProgress}
        onEnded={handleEnded}
      />
    ) : (
      <div className="no-player">No video source</div>
    )
  ) : (
    <>
      <button
        className="thumb"
        onClick={handleThumbClick}
        aria-label={`Play ${video.title}`}
      >
        {video.youtubeVideoId && thumbQuality !== "none" ? (
          <img
            key={thumbQuality}
            src={thumbnailUrl(video.youtubeVideoId, thumbQuality)}
            alt=""
            loading="lazy"
            decoding="async"
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth <= 160) {
                setThumbQuality((q) => (q === "sd" ? "mq" : "none"));
              }
            }}
            onError={() => setThumbQuality((q) => (q === "sd" ? "mq" : "none"))}
          />
        ) : (
          <span className="thumb-fallback" />
        )}
        <span className="thumb-shade" />
        <span className="play">
          <Play />
        </span>
        <span className="duration">{formatDuration(video.durationSeconds)}</span>
        {watched && (
          <span className="watched-badge" aria-label="Watched">
            <Check />
          </span>
        )}
      </button>
      {showResume && initialSaved && (
        <div className="resume-prompt">
          <div className="resume-label">Resume playback?</div>
          <div className="resume-time">at {formatPosition(initialSaved.seconds)}</div>
          <div className="resume-actions">
            <button className="btn btn-primary" onClick={() => play(initialSaved.seconds, true)}>
              <Play /> Resume
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                onClearPlayback(video.id);
                setShowResume(false);
                play(0, true);
              }}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className={`card ${watched ? "is-watched" : ""}`}>
      <div className="card-media">{media}</div>

      <div className="card-body">
        <div className="card-title">{video.title}</div>
        <div className="card-meta">
          {formatDuration(video.durationSeconds)} · NASA ARSET
        </div>

        <div className="card-actions">
          {supportsLocalDownload &&
            (video.downloaded ? (
              <span className="tag tag-done">Downloaded</span>
            ) : (
              <button className="btn" onClick={startDownload} disabled={downloading}>
                {downloading ? (
                  <>
                    <Loader2 size={13} className="spin" />
                    {Math.round(dl?.progress ?? 0)}%
                  </>
                ) : (
                  <>
                    <Download /> Download
                  </>
                )}
              </button>
            ))}
          {supportsLocalDownload && dl?.status === "error" && (
            <span className="tag tag-error">{dl.error}</span>
          )}
          <button
            className={`watch-btn ${watched ? "is-seen" : ""}`}
            onClick={() => onToggleWatched(video.id)}
          >
            {watched ? (
              <>
                <Check /> Watched
              </>
            ) : (
              <>Mark as watched</>
            )}
          </button>
        </div>

        {downloading && (
          <div className="dl-progress">
            <span style={{ width: `${Math.round((dl?.progress ?? 0) * 100)}%` }} />
          </div>
        )}
      </div>
    </div>
  );
}

function LocalVideo({
  src,
  startAt,
  autoPlay,
  onProgress,
  onEnded,
}: {
  src: string;
  startAt: number;
  autoPlay: boolean;
  onProgress: (seconds: number, duration: number) => void;
  onEnded: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const seeded = useRef(false);
  const last = useRef(0);
  const progressRef = useRef(onProgress);
  progressRef.current = onProgress;
  const endedRef = useRef(onEnded);
  endedRef.current = onEnded;

  useEffect(() => {
    return () => {
      const v = ref.current;
      if (v && Number.isFinite(v.currentTime) && v.currentTime > 1 && !v.ended) {
        progressRef.current(v.currentTime, v.duration);
      }
    };
  }, []);

  return (
    <video
      ref={ref}
      controls
      preload="metadata"
      src={src}
      onLoadedMetadata={(e) => {
        if (!seeded.current) {
          e.currentTarget.currentTime = startAt;
          seeded.current = true;
          if (autoPlay) e.currentTarget.play().catch(() => {});
        }
      }}
      onTimeUpdate={(e) => {
        const now = Date.now();
        if (now - last.current >= 5000) {
          last.current = now;
          progressRef.current(e.currentTarget.currentTime, e.currentTarget.duration);
        }
      }}
      onPause={(e) => progressRef.current(e.currentTarget.currentTime, e.currentTarget.duration)}
      onEnded={() => endedRef.current()}
    />
  );
}

function YouTubePlayer({
  videoId,
  title,
  startAt,
  autoPlay,
  onProgress,
  onEnded,
}: {
  videoId: string;
  title: string;
  startAt: number;
  autoPlay: boolean;
  onProgress: (seconds: number, duration: number) => void;
  onEnded: () => void;
}) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);
  const last = useRef(0);
  const lastTime = useRef(0);
  const lastDuration = useRef(0);
  const progressRef = useRef(onProgress);
  progressRef.current = onProgress;
  const endedRef = useRef(onEnded);
  endedRef.current = onEnded;

  const send = useCallback((message: unknown) => {
    ref.current?.contentWindow?.postMessage(JSON.stringify(message), "*");
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source !== ref.current?.contentWindow) return;
      let data: any;
      try {
        data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }
      if (!data || !data.event) return;
      if (data.event === "onReady") {
        setReady(true);
        send({ event: "listening", id: "arset" });
      }
      if (data.event === "infoDelivery" && data.info) {
        const t = data.info.currentTime;
        if (typeof t === "number") {
          lastTime.current = t;
          lastDuration.current = data.info.duration ?? 0;
          const now = Date.now();
          if (now - last.current >= 5000) {
            last.current = now;
            progressRef.current(t, data.info.duration ?? 0);
          }
        }
        if (data.info.playerState === 0) endedRef.current();
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [send]);

  useEffect(() => {
    if (!ready || (!autoPlay && startAt <= 0)) return;
    send({ event: "command", func: "seekTo", args: [startAt, true] });
    if (autoPlay) send({ event: "command", func: "playVideo", args: [] });
    const interval = window.setInterval(
      () => send({ event: "command", func: "getCurrentTime", args: [] }),
      2000,
    );
    const retry =
      startAt > 5
        ? window.setTimeout(() => {
            if (lastTime.current < 5) {
              send({ event: "command", func: "seekTo", args: [startAt, true] });
            }
          }, 4000)
        : null;
    return () => {
      window.clearInterval(interval);
      if (retry !== null) window.clearTimeout(retry);
    };
  }, [ready, startAt, autoPlay, send]);

  useEffect(() => {
    return () => {
      if (lastTime.current > 1) {
        progressRef.current(lastTime.current, lastDuration.current);
      }
    };
  }, []);

  const src = `${youtubeEmbedUrl(videoId)}?enablejsapi=1&playsinline=1&origin=${encodeURIComponent(
    window.location.origin,
  )}`;

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      onLoad={() => send({ event: "listening", id: "arset" })}
    />
  );
}
