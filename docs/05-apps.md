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
| `App.tsx` | Tout l'écran : 3 vues (modules / module / player). |
| `src/types.ts` | Types du catalogue (copie locale, indépendante de `@arset/core`). |
| `src/catalog.ts` | `buildIndex` + `formatDuration` (logique locale). |
| `src/storage.ts` | Progression via `AsyncStorage` (clés `arset.watched.v1`, `arset.completed.v1`). |
| `app.json` | Config Expo (nom, slug, icônes, package Android). |
| `eas.json` | Profils de build EAS (`preview` = APK, `production` = AAB). |

Différences majeures avec le desktop :

- **Pas de serveur** : le catalogue est **bundlé** (`assets/video_catalog.json`).
- **Lecture** : via un `WebView` qui charge `https://www.youtube.com/embed/{id}`.
- **Progression** : `AsyncStorage` (persistance locale), pas de `progress.json`.
- **Pas de téléchargement local** sur mobile (yt-dlp ne tourne pas sur Android) ;
  le mobile lit en streaming. C'est le backend PC qui télécharge.

Le dossier `android/` est généré automatiquement (Continuous Native Generation) et
n'est **pas versionné** — on configure le natif via `app.json` et les config plugins.
