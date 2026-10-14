# Arset Program — ARSET Viewer v2

Lecteur du parcours de formation **NASA ARSET** (télédétection / observation de la Terre),
ré-architecturé en **monorepo multi-versions**.

Contrairement à l'ancien viewer (qui servait ~57 Go de vidéos téléchargées à l'avance),
cette version **n'a plus besoin des vidéos localement** : elle lit le catalogue JSON et
affiche les vidéos en **streaming**, avec un **téléchargement local à la demande**
(un clic sur un bouton, via `yt-dlp`).

Trois versions partagent la même source de vérité (les ressources centralisées) :

| Version | Techno | Cible |
|---|---|---|
| `apps/desktop` | React + Vite | PC (navigateur) |
| `apps/mobile` | Expo / React Native | Android (APK / Expo Go) |
| `apps/server` | Node / Express | Backend (catalogue, `yt-dlp`, streaming, progression) |

---

## Architecture

```
Arset_programm/
├── Makefile                   # orchestration : install / sync / dev / build
├── package.json               # npm workspaces (apps/* + packages/*)
├── resources/                 # 🗂 ressources centralisées (committées, légères)
│   ├── catalog/               #   video_catalog.json + video_urls.json (source de vérité)
│   ├── learning_path.json     #   parcours 4 phases → clés de modules
│   └── notes/                 #   Plan.md, notes.md, transcripts
├── packages/
│   └── core/                  # @arset/core — types + loaders partagés
└── apps/
    ├── server/                # backend Node/Express
    ├── desktop/               # app React (Vite) — PC
    └── mobile/                # app Expo / React Native — Android
```

- **Ressources centralisées** : `resources/` est la seule source de vérité. Le desktop
  l'interroge via l'API du serveur ; le mobile la *bundle* (les JSON sont copiés dans
  `apps/mobile/assets/` par `make sync`).
- **`@arset/core`** : types et logique partagés (parsing du catalogue, parcours, durées,
  formatage), consommé par le serveur et le desktop.
- **Données runtime hors repo** : tout ce qui est généré à l'exécution (vidéos téléchargées,
  progression) vit dans `~/.arset-data/` (surchargeable via `ARSET_DATA_DIR`).

```
~/.arset-data/
├── videos/<video_id>.mp4      # téléchargements à la demande
└── progress.json              # modules terminés / vidéos vues
```

---

## Prérequis

- **Node.js** ≥ 18 et **npm** ≥ 9
- **`yt-dlp`** — installé automatiquement par `make install` s'il est absent
- **`ffmpeg`** — pour le streaming/merge si besoin (`sudo apt install ffmpeg`)
- *(Android uniquement)* selon la méthode choisie (voir plus bas) : l'app **Expo Go**,
  ou **adb** + **Android Studio/SDK**, ou un **compte Expo** (EAS).

---

## Installation

```bash
make install
```

Installe **tout** en une fois :

1. `install-js` — `npm install` sur tous les workspaces (+ compilation de `@arset/core`),
2. `install-resources` — copie du catalogue + notes depuis `~/Documents/Remote Sensing Classes`,
3. `install-tools` — vérifie/installe `yt-dlp` et `ffmpeg`,
4. `ensure-data` — crée `~/.arset-data/videos`.

---

## Commandes Makefile

| Commande | Description |
|---|---|
| `make install` | Installe **tout** (JS + ressources + outils + data dir) |
| `make sync` | Re-copie le catalogue + notes depuis la source |
| `make pc` | Lance backend (4000) + desktop React (5173) en parallèle |
| `make dev-server` | Backend Express seul (dev, port 4000) |
| `make dev-desktop` | Desktop React/Vite seul (dev, port 5173) |
| `make dev-mobile` | Expo (dev Android) |
| `make build-core` | Compile `@arset/core` |
| `make build-desktop` | Build production de l'app React |
| `make build-android` | Build APK via EAS (cloud) |
| `make typecheck` | Typecheck core + server + desktop + mobile |
| `make test` | Tests de `@arset/core` |
| `make clean` | Supprime `node_modules` et artefacts |
| `make help` | Affiche l'aide |

---

## Version Desktop (PC)

### Lancer en développement

```bash
make pc          # backend (4000) + frontend (5173)
```

Ouvre **http://localhost:5173**.

Ou, dans deux terminaux séparés : `make dev-server` puis `make dev-desktop`.

### Utilisation

| Action | Résultat |
|---|---|
| Cliquer sur un module | Affiche ses vidéos (stream YouTube, aucun téléchargement) |
| « ⬇ Télécharger » | `yt-dlp` télécharge la vidéo dans `~/.arset-data/videos/` |
| Une fois téléchargée | Lecture locale (`<video>`, HTTP Range) |
| « Marquer vue » / « Terminer » | Progression sauvegardée dans `~/.arset-data/progress.json` |

### Exporter en production

```bash
make build-desktop        # génère apps/desktop/dist/
```

Le dossier `dist/` est une application web statique, servable par n'importe quel serveur :

```bash
# Aperçu local
npm run preview -w @arset/desktop

# Ou servir avec un serveur statique quelconque (ex. nginx, `npx serve`)
npx serve apps/desktop/dist
```

> ⚠️ En production, l'app a besoin du backend pour `/api`. Deux options :
> - servir `dist/` **derrière le même domaine** que le serveur Express (reverse-proxy),
> - ou recompiler le frontend avec l'URL du backend en dur (variable d'env Vite).
> En dev, le proxy Vite (`/api` → `localhost:4000`) gère déjà ce lien.

---

## Version Android

Le mobile bundle le catalogue et lit les vidéos via YouTube (WebView). La progression est
stockée localement (AsyncStorage). Le dossier `android/` est généré automatiquement
(Continuous Native Generation) et **n'est pas versionné**.

### A. Développement rapide — Expo Go (recommandé)

1. Installe **Expo Go** (Play Store) sur le téléphone.
2. Téléphone et PC sur le **même Wi-Fi**.

```bash
make dev-mobile       # = expo start
```

3. Scanne le **QR code** avec Expo Go, **ou** branche le téléphone en USB (débogage actif)
   et appuie sur **`a`** dans le terminal.

> `react-native-webview` et `async-storage` sont inclus dans Expo Go → l'app tourne
> directement sans build natif.

### B. Débogage USB + build natif local (installe un APK debug sur le téléphone)

Prérequis : **Android Studio + SDK + JDK 17**, et `adb` dans le `PATH`.

1. Téléphone : *Paramètres → À propos → taper 7× le numéro de build → Options développeur →
   Débogage USB*.
2. Branche l'USB, vérifie que l'appareil est vu :

```bash
adb devices
```

3. Build + installation :

```bash
cd apps/mobile
npx expo run:android
```

Cela génère `android/`, compile et installe l'APK debug sur le téléphone. Pour les logs :
`adb logcat`.

### C. APK partageable via EAS (cloud, sans SDK local)

Prérequis : un **compte Expo** (gratuit).

1. Connexion (une seule fois) :

```bash
cd apps/mobile
npx eas-cli login
```

2. Build de l'APK :

```bash
make build-android     # = eas build -p android --profile preview
```

Le fichier `apps/mobile/eas.json` définit le profil `preview` (APK, distribution interne).
À la fin, EAS donne un **lien de téléchargement** de l'APK à installer sur le téléphone.

Pour un bundle Play Store (AAB) en release :

```bash
cd apps/mobile
npx eas-cli build -p android --profile production
```

---

## Ressources & données

- **Catalogue** : snapshot committé dans `resources/catalog/video_catalog.json`
  (269 vidéos, 126 modules, URLs YouTube, durées, déduplication sha256).
- **Parcours** : `resources/learning_path.json` (4 phases, 17 modules) — éditable pour
  ajouter les modules complémentaires de `Plan.md`.
- **Données runtime** : `~/.arset-data/` (vidéos + progression), hors repo, configurable via
  `ARSET_DATA_DIR`.

### Synchronisation

Pour re-générer le catalogue depuis la source
(`~/Documents/Remote Sensing Classes/viewer/`) :

```bash
make sync
```

Source configurable : `make sync ARSET_SOURCE=/chemin/vers/le/dossier`.

---

## Dépannage

- **Page blanche en `make pc`** : le cache de pré-bundling Vite est peut-être périmé après
  une mise à jour de `@arset/core`. Relance `make dev-desktop`, ou supprime
  `apps/desktop/node_modules/.vite/`.
- **yt-dlp sans JS runtime** : les versions récentes de yt-dlp utilisent un runtime JS pour
  l'extraction YouTube. Le backend passe déjà `--js-runtimes node`. Si yt-dlp se plaint,
  installe `deno` ou vérifie que `node` est dans le `PATH`.
- **Vidéo téléchargée en basse qualité** : limite de `best[ext=mp4]` (mp4 simple fichier).
  Installer `ffmpeg` permet d'utiliser des formats plus élevés (merge audio/vidéo).
- **Ports occupés** : backend `4000`, desktop `5173`. Configurables via `PORT` et
  `apps/desktop/vite.config.ts`.
- **`make build-android` échoue (pas de compte)** : faire `cd apps/mobile && npx eas-cli login`
  d'abord.
