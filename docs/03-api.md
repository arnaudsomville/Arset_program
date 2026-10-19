# 03 — API du backend

Base : `http://localhost:4000` (en dev). Toutes les réponses sont en JSON.

> Le frontend (`apps/desktop/src/api.ts`) est le client de référence : chaque fonction
> correspond à une route ci-dessous.

## Sommaire

| Méthode | Route | Description |
|---|---|---|
| GET | `/api/health` | Vérif que le serveur tourne |
| GET | `/api/catalog` | Catalogue : catégories > sous-catégories > modules |
| GET | `/api/modules/:key/videos` | Vidéos d'un module |
| GET | `/api/progress` | Progression complète |
| POST | `/api/progress/module/:key` | Marquer/terminer un module |
| POST | `/api/progress/video/:id` | Marquer une vidéo vue |
| POST | `/api/videos/:id/download` | Lancer le téléchargement |
| GET | `/api/videos/:id/download-status` | Suivi du téléchargement |
| GET | `/api/videos/:id/stream` | Lire une vidéo téléchargée |

> ⚠️ `:key` contient des `/` (ex. `disasters/floods/01-...`). Il faut donc
> **l'encoder** avec `encodeURIComponent()` côté client. C'est ce que fait `api.ts`.

## Détail des réponses

### `GET /api/health`

```json
{ "ok": true, "time": "2026-10-14T09:53:03.049Z" }
```

### `GET /api/catalog`

```json
[
  {
    "key": "disasters",
    "title": "Disasters",
    "modules": [],
    "subcategories": [
      {
        "key": "floods",
        "title": "Floods",
        "modules": [
          {
            "key": "disasters/floods/01-monitoring-urban-floods-using-remote-sensing",
            "title": "Monitoring Urban Floods using Remote Sensing",
            "status": "ok",
            "videoCount": 2,
            "durationSeconds": 6300
          }
        ]
      }
    ]
  }
]
```

### `GET /api/modules/:key/videos`

```json
{
  "key": "self-paced/01-fundamentals-of-remote-sensing",
  "title": "Fundamentals of Remote Sensing",
  "videos": [
    {
      "id": 244,
      "title": "Fundamentals of Aquatic Remote Sensing",
      "durationSeconds": 2598,
      "youtubeUrl": "https://www.youtube.com/watch?v=1TBtJ8pTANQ",
      "youtubeVideoId": "1TBtJ8pTANQ",
      "urlStatus": "verified",
      "downloaded": false,
      "streamUrl": "/api/videos/244/stream"
    }
  ]
}
```

Le champ `downloaded` détermine si le frontend affiche `<video src=streamUrl>`
(`true`) ou un embed YouTube + bouton « Télécharger » (`false`).

### `GET /api/progress`

```json
{
  "modules": { "disasters/floods/01-...": { "completed": true, "updated": "..." } },
  "videos":  { "244": { "watched": true, "updated": "..." } }
}
```

### `POST /api/progress/module/:key`

Body facultatif `{ "completed": true }` (si absent → **toggle**).

Marque aussi **toutes les vidéos du module** dans le même état (symétrie).
Renvoie la progression complète (même forme que `GET /api/progress`).

### `POST /api/progress/video/:id`

Body facultatif `{ "watched": true }` (si absent → **toggle**).

Recalcule la complétion des modules contenant la vidéo
(`completed` ⟺ toutes les vidéos du module sont vues).
Renvoie la progression complète (même forme que `GET /api/progress`).

### `POST /api/videos/:id/download`

Déclenche `yt-dlp` en arrière-plan (non bloquant).

```json
{ "status": "downloading", "progress": 0 }
```

Réponses possibles : `idle`, `downloading` (avec `progress`), `done`, `error` (avec `error`).

### `GET /api/videos/:id/download-status`

```json
{ "status": "downloading", "progress": 42 }
```

### `GET /api/videos/:id/stream`

- Vidéo téléchargée → renvoie le fichier mp4 avec support **HTTP Range**
  (statut `200`/`206`). Le serveur utilise `res.sendFile()`, qui gère le Range.
- Vidéo non téléchargée → `404 { "error": "Vidéo non téléchargée" }`.

## Le téléchargement côté serveur

La commande `yt-dlp` exécutée est :

```
yt-dlp -f "best[ext=mp4]/best" --js-runtimes node --newline --no-playlist -o <dataDir>/videos/<id>.mp4 <youtubeUrl>
```

- `-f "best[ext=mp4]/best"` → meilleur format mp4 (single fichier, évite le merge).
- `--js-runtimes node` → nécessaire pour l'extraction YouTube des versions récentes.
- `--newline` → pour parser le `%` de progression depuis la sortie.
- Le fichier final est `~/.arset-data/videos/<id>.mp4`.
