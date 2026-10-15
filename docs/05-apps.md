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
| `src/ytdlp.ts` | Façade autour du module local `modules/youtubedl` (détection Expo Go + erreurs lisibles). |
| `app.json` | Config Expo (nom, slug, icônes, package Android, plugins). |
| `eas.json` | Profils de build EAS (`preview`, `development`, `production`). |

L'app est **autonome** (aucun serveur requis) :

- **Catalogue bundlé** : `assets/video_catalog.json` (pas d'appel réseau pour lister).
- **Lecture par défaut** : `WebView` vers `https://www.youtube.com/embed/{id}` (avec en-tête
  `Referer` — requis par YouTube, sinon erreur 153).
- **Progression** : `AsyncStorage` (persistance locale).
- **Téléchargement local** : via un **module natif local** (`modules/youtubedl`) qui
  appelle **Python + yt-dlp** embarqués (lib `youtubedl-android` de yausername).
  `downloadVideo(id, url)` lance le téléchargement ; la progression arrive via les
  événements `progress` du module natif, et le chemin final via `DownloadResult.filePath`.
  La lecture se fait ensuite en local avec `expo-video`.

> Le module `modules/youtubedl` repose sur `io.github.junkfood02.youtubedl-android:library:0.18.1`
> (yt-dlp + Python embarqués, avec **quickjs** pour déchiffrer les tokens YouTube —
> pas besoin de curl-cffi, contrairement à l'ancien `ytdlp-react-native`).
> Il **nécessite un build natif** (pas Expo Go) : en Expo Go, le bouton ⬇ affiche un
> message d'erreur, mais le streaming reste fonctionnel.
> Format `best[ext=mp4]/best` = stream progressif unique (pas de merge ffmpeg —
> FFmpeg non embarqué).

Le dossier `android/` est généré automatiquement (Continuous Native Generation) et
n'est **pas versionné** — on configure le natif via `app.json` et les config plugins.

## Ordre des vidéos dans un module

L'ordre brut de `source_video_ids` n'est pas fiable (séries « ..., Part X/N » mélangées).
Le numéro d'épisode est extrait du titre (`episodeNumber`, voir
`packages/core/src/episode.ts` et sa copie `apps/mobile/src/catalog.ts`) :

- `buildCatalogIndex` (`@arset/core`) trie les vidéos de chaque module — utilisé par le
  **serveur** ET le **desktop** ;
- `buildIndex` (mobile) applique le même tri sur le catalogue bundlé.

→ Effet partout (serveur, desktop, mobile), et **survit à `make sync`** (le tri est dans
le code, pas seulement dans les données). Le script `scripts/reorder-catalog.mjs`
normalise aussi les fichiers JSON (`resources/` + `apps/mobile/assets/`).

## Progression : module ⇄ vidéos

Règle unique : **un module est « terminé » ⟺ toutes ses vidéos sont « vues »**. La mise
à jour est **symétrique** (décocher propage aussi) :

- marquer un module → marque/démarque toutes ses vidéos ;
- marquer une vidéo → recalcule la complétion des modules la contenant.

Côté **serveur**, les routes `POST /api/progress/module/:key` et
`POST /api/progress/video/:id` renvoient désormais la **progression complète**
(`ProgressData`) après avoir appliqué la cascade (`mutateProgress` dans `store.ts`).
Le **desktop** (`staticApi.ts` en mode statique, backend en dev) fait de même ; `App.tsx`
se contente de `setProgress(...)`. Le **mobile** applique la cascade en local via
`index.videosByKey` (`markModule` / `markVideo` dans `App.tsx`).
