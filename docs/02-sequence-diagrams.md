# 02 — Diagrammes de séquence

Ces diagrammes décrivent les interactions au fil du temps (qui appelle qui, dans quel ordre).
Les acteurs sont : le **Navigateur** (React), le **Serveur** (Express) et **yt-dlp**.

## 1. Chargement initial et navigation

```mermaid
sequenceDiagram
    autonumber
    participant B as Navigateur (React)
    participant S as Serveur (Express)

    B->>S: GET /api/learning-path
    B->>S: GET /api/complementary
    B->>S: GET /api/progress
    S-->>B: parcours + catégories + progression
    Note over B: Affiche la sidebar (phases + modules)

    B->>S: GET /api/modules/{key}/videos
    S-->>B: { key, title, videos[] }  (avec flag "downloaded")
    Note over B: Affiche les cartes vidéo
```

Détail côté React : `App.tsx` fait un `useEffect` au montage qui appelle les trois
premières routes en parallèle (`Promise.all`), puis `selectModule()` charge les vidéos
d'un module quand l'utilisateur clique.

## 2. Téléchargement à la demande

```mermaid
sequenceDiagram
    autonumber
    participant B as Navigateur (React)
    participant S as Serveur (Express)
    participant Y as yt-dlp
    participant D as ~/.arset-data/videos

    B->>S: POST /api/videos/{id}/download
    S->>Y: spawn "yt-dlp -f best[ext=mp4]/best --js-runtimes node ..."
    S-->>B: { status: "downloading", progress: 0 }

    loop Tant que status = "downloading"
        B->>S: GET /api/videos/{id}/download-status   (toutes les 1 s)
        S-->>B: { status: "downloading", progress: 42 }
    end

    Y->>D: écrit <id>.mp4
    S-->>B: { status: "done", progress: 100 }
    Note over B: Met à jour la carte → "Téléchargée" + lecture locale
```

Côté React, c'est `VideoCard` qui gère le polling : `startDownload()` POST puis un
`setInterval` de 1 s interroge `download-status` jusqu'à `done` ou `error`.

## 3. Lecture locale (stream avec HTTP Range)

Quand la vidéo est téléchargée, le `<video>` du navigateur lit le fichier local via le serveur.

```mermaid
sequenceDiagram
    autonumber
    participant B as <video> (navigateur)
    participant S as Serveur (Express)
    participant D as ~/.arset-data/videos/<id>.mp4

    B->>S: GET /api/videos/{id}/stream  (avec en-tête Range)
    S->>D: res.sendFile(...)  → gère le Range automatiquement
    S-->>B: 206 Partial Content (morceau de la vidéo)
    Note over B: Le player peut avancer/reculer sans tout télécharger
```

## 4. Progression (marquer terminé / marquer vue)

```mermaid
sequenceDiagram
    autonumber
    participant B as Navigateur (React)
    participant S as Serveur (Express)
    participant P as ~/.arset-data/progress.json

    B->>S: POST /api/progress/module/{key}   (toggle "completed")
    S->>P: lit/écrit progress.json
    S-->>B: { completed: true }

    B->>S: POST /api/progress/video/{id}     (toggle "watched")
    S->>P: lit/écrit progress.json
    S-->>B: { watched: true }

    Note over B: Met à jour l'état React (setProgress) sans recharger la page
```

## 5. Application mobile (autonome)

Sur Android, il n'y a **aucun serveur** : le catalogue est bundlé, la lecture passe par
YouTube, et le téléchargement est fait **directement sur l'appareil** via yt-dlp embarqué.

```mermaid
sequenceDiagram
    participant M as App Expo (React Native)
    participant A as AsyncStorage (local)
    participant W as WebView YouTube
    participant Y as ytdlp-react-native (yt-dlp embarqué)
    participant F as Stockage app (Android/data/...)

    Note over M: Catalogue chargé depuis le JSON bundlé (assets/)
    M->>A: charge "watched" / "completed" / téléchargements
    M->>W: lecture streaming YouTube (embed)

    alt Téléchargement local (build natif uniquement)
        M->>Y: YtDlp.download({ url, format: 'best' })
        Y-->>M: DownloadTask (progression via listeners)
        Y->>F: écrit <id>.mp4
        M->>A: sauvegarde l'uri du fichier
        M->>M: lecture locale via expo-video (fichier)
    end
```
