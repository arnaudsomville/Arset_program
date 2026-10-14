# 05 — Fonctionnement interne de chaque app

## `apps/server` (backend Node/Express)

Fichiers :

| Fichier | Rôle |
|---|---|
| `src/index.ts` | Point d'entrée : charge le catalogue, définit les routes, écoute sur `PORT`. |
| `src/config.ts` | Chemins (`~/.arset-data`, catalogue) et `PORT`. |
| `src/store.ts` | Lecture/écriture de `progress.json` (avec cache en mémoire). |
| `src/downloads.ts` | Gestionnaire de téléchargements : `spawn(yt-dlp)`, état des jobs, fichier final. |

Logique de démarrage (`index.ts`) :

1. `parseCatalog(...)` puis `buildCatalogIndex(...)` (venant de `@arset/core`) → charge
   tout le catalogue **en mémoire** au lancement.
2. Définit les routes Express (voir [03-api.md](03-api.md)).
3. `app.listen(PORT)`.

Le **téléchargement** est non bloquant : `startDownload()` lance `yt-dlp` dans un process
enfant et garde l'état dans un `Map<string, DownloadEntry>`. Le frontend poll ensuite
`download-status`. Les vidéos finissent dans `~/.arset-data/videos/<id>.mp4`.

## `apps/desktop` (React + Vite)

Fichiers :

| Fichier | Rôle |
|---|---|
| `index.html` | Coquille HTML (monte l'app dans `<div id="root">`). |
| `src/main.tsx` | Point d'entrée React : `createRoot(...).render(<App/>)`. |
| `src/App.tsx` | Tout le composant : sidebar, cartes vidéo, gestion d'état. |
| `src/api.ts` | Client HTTP : enveloppe `fetch` pour chaque route de l'API. |
| `src/styles.css` | Styles (thème sombre). |
| `vite.config.ts` | Config Vite (proxy `/api`, pré-bundling de `@arset/core`). |

Principes React à connaître (voir aussi [08-getting-started.md](08-getting-started.md)) :

- **`useState`** : état local (ex. `videos`, `progress`, `search`).
- **`useEffect`** : effet de bord au montage (chargement initial des données).
- **`useCallback`/`useMemo`** : mémoïsation (évite de recréer des fonctions/valeurs).
- Le rendu est **déclaratif** : on décrit ce qui doit s'afficher selon l'état, React
  s'occupe de mettre à jour le DOM.

Flux principal : `App` charge le parcours + les catégories + la progression → l'utilisateur
clique un module → `selectModule` charge les vidéos → `VideoCard` affiche soit un
`<video>` (téléchargé) soit un `<iframe>` YouTube + un bouton « Télécharger ».

## `apps/mobile` (Expo / React Native)

Fichiers :

| Fichier | Rôle |
|---|---|
| `App.tsx` | Tout l'écran : 3 vues (modules / module / player) + téléchargement. |
| `src/types.ts` | Types du catalogue (copie locale, indépendante de `@arset/core`). |
| `src/catalog.ts` | `buildIndex` + `formatDuration` (logique locale). |
| `src/storage.ts` | Progression + fichiers téléchargés via `AsyncStorage`. |
| `src/ytdlp.ts` | Façade autour de `ytdlp-react-native` (détection Expo Go + erreurs lisibles). |
| `app.json` | Config Expo (nom, slug, icônes, package Android, plugins). |
| `eas.json` | Profils de build EAS (`preview`, `development`, `production`). |

L'app est **autonome** (aucun serveur requis) :

- **Catalogue bundlé** : `assets/video_catalog.json` (pas d'appel réseau pour lister).
- **Lecture par défaut** : `WebView` vers `https://www.youtube.com/embed/{id}` (avec en-tête
  `Referer` — requis par YouTube, sinon erreur 153).
- **Progression** : `AsyncStorage` (persistance locale).
- **Téléchargement local** : via **`ytdlp-react-native`**, un module natif qui embarque
  **Python + yt-dlp** (extracteurs complets). `YtDlp.download({ format: 'best' })` récupère
  un stream mp4 progressif (audio+vidéo), la progression arrive via `task.addListener('progress')`
  et le chemin final via `'completed'`. La lecture se fait ensuite en local avec `expo-video`.

> Le module `ytdlp-react-native` repose sur `dev.ffmpegkit-maintained:yt-dlp-android`
> (yt-dlp + Python embarqués). Il **nécessite un build natif** (pas Expo Go) : en Expo Go,
> le bouton ⬇ affiche un message d'erreur, mais le streaming reste fonctionnel.
> `format: 'best'` = stream progressif unique (pas de merge ffmpeg 1080p, FFmpeg non embarqué).

Le dossier `android/` est généré automatiquement (Continuous Native Generation) et
n'est **pas versionné** — on configure le natif via `app.json` et les config plugins.
