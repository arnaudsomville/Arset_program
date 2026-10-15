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
Arset_program/
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

- **Ressources centralisées** : `resources/` est la seule source de vérité (curée dans le
  repo). Le desktop l'interroge via l'API du serveur ; le mobile la *bundle* (les JSON sont
  copiés dans `apps/mobile/assets/` par `make sync-mobile`).
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
2. `install-tools` — vérifie/installe `yt-dlp` et `ffmpeg`,
3. `install-sdk` — installe **JDK 17+ + SDK Android** si absents (pour le build local),
4. `ensure-data` — crée `~/.arset-data/videos`.

> Le catalogue (`resources/`) est committé et curé : il n'y a plus d'import externe.
> `make sync-mobile` recopie les JSON vers `apps/mobile/assets/` après une modif.

---

## Commandes Makefile

| Commande | Description |
|---|---|
| `make install` | Installe **tout** (JS + outils + data dir) |
| `make sync-mobile` | Recopie le catalogue + parcours dans `apps/mobile/assets/` |
| `make pc` | Lance backend (4000) + desktop React (5173) en parallèle |
| `make dev-server` | Backend Express seul (dev, port 4000) |
| `make dev-desktop` | Desktop React/Vite seul (dev, port 5173) |
| `make dev-mobile` | Expo (dev Android) |
| `make build-core` | Compile `@arset/core` |
| `make build-desktop` | Build production de l'app React |
| `make build-android` | Build local Android (vérifie JDK/SDK puis compile via USB) |
| `make android-eas` | APK Android via EAS (cloud, sans SDK local) |
| `make android-check` | Vérifie les prérequis du build local (sans installer) |
| `make android-login` | Connexion au compte Expo (une fois) |
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

L'app Android est **100 % autonome** : elle bundle le catalogue et lit les vidéos via
YouTube (WebView). Le **téléchargement local** se fait directement sur l'appareil grâce à
un **module natif local** (`modules/youtubedl`) qui embarque **Python + yt-dlp** (lib
`youtubedl-android`) : le bouton ⬇ télécharge le mp4 (stream `best`) dans le stockage de
l'app, avec progression. La lecture se fait ensuite avec `expo-video`. La progression est
stockée en `AsyncStorage`.

> ⚠️ **Le téléchargement nécessite un build natif** (pas Expo Go) : le module yt-dlp n'est
> pas embarqué dans Expo Go. En Expo Go, tout le reste marche (navigation, **streaming**,
> progression) mais le bouton ⬇ affiche un message d'erreur.

Le dossier `android/` est généré automatiquement (Continuous Native Generation) et
**n'est pas versionné**.

### Deux façons de construire l'APK

#### 1. EAS (cloud) — aucun SDK/câble nécessaire

```bash
make android-login     # connexion compte Expo (gratuit, une seule fois)
make android-eas       # → APK téléchargeable + installable sur le téléphone
```

À la fin, EAS donne un **lien de téléchargement** de l'APK. C'est l'APK autonome (JS bundlé
+ module yt-dlp embarqué), idéal pour tester le téléchargement sans câble.

> Optionnel : `make android-dev-client` construit un **client de développement** (pour
> itérer avec Metro au lieu d'un APK autonome). Pour un AAB Play Store :
> `cd apps/mobile && npx eas-cli build -p android --profile production`.

#### 2. Local (USB) — build sur ton PC, installé via câble

```bash
make install          # installe JDK 17+ + SDK Android si absents (une fois)
make build-android    # vérifie les prérequis puis compile + installe via adb
```

`make build-android` **vérifie d'abord** JDK 17+ / SDK / `adb` / appareil (`make android-check`)
et **plante** avec un message clair s'il en manque. `make install` installe le JDK (Temurin 21)
et le SDK Android dans `~/Android/Sdk` s'ils ne sont pas déjà là (sans sudo).

#### 3. CI (GitHub Actions) — APK reproductible sans SDK local

Un workflow `.github/workflows/android.yml` build l'APK en release et le stocke en
**artefact** (téléchargeable depuis l'onglet *Actions*). Déclenchement **manuel**
(*Actions → Build Android APK → Run workflow*) ou sur **tag `v*`**. Gratuit (repo privé :
2000 min/mois). Aucun keystore requis (APK signé avec la clé debug, installable tel quel).

### Développement rapide sans build (Expo Go)

```bash
make dev-mobile        # = expo start → scanne le QR avec Expo Go
```

En Expo Go : navigation, streaming YouTube et progression fonctionnent ; **seul le
téléchargement est indisponible** (message d'erreur explicite au clic).

---

## Ressources & données

- **Catalogue** : snapshot committé dans `resources/catalog/video_catalog.json`
  (269 vidéos, 126 modules, URLs YouTube, durées, déduplication sha256).
- **Parcours** : `resources/learning_path.json` (4 phases, 17 modules) — éditable pour
  ajouter les modules complémentaires de `Plan.md`.
- **Données runtime** : `~/.arset-data/` (vidéos + progression), hors repo, configurable via
  `ARSET_DATA_DIR`.

### Mise à jour des ressources

Le catalogue est la **source de vérité**, édité directement dans `resources/`.
Après une modification, recopier les JSON bundlés du mobile :

```bash
make sync-mobile
```

Les titres vidéo ont été réconciliés avec YouTube (`resources/catalog/youtube_titles.json`,
généré par `node scripts/youtube-titles.cjs`).

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
- **`make android-eas` échoue (pas de compte)** : faire `make android-login` d'abord.
- **Téléchargement indisponible en Expo Go** : normal — le module yt-dlp n'est pas dans
  Expo Go. Utilise un build natif (`make android-eas` ou `make android-local`).
