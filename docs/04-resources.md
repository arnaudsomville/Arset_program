# 04 — Ressources (données centralisées)

Les données vivent dans `resources/`. Elles sont **committées** (légères : ~1 Mo) et
**curées directement dans le repo** — c'est la source de vérité (plus d'import externe).

```
resources/
├── catalog/
│   ├── video_catalog.json     # ← LA source de vérité (335 vidéos, 130 modules)
│   ├── arset_taxonomy.json    #   ordre officiel du guide PDF (catégories > trainings)
│   ├── youtube_titles.json    #   titres YouTube de référence (id → titre/channel)
│   └── video_urls.json        #   mapping module → [{file, url}]
└── notes/                     # Plan.md, notes.md, transcripts (markdown)
    └── transcripts/           #   transcripts YouTube, en miroir du catalogue
                              #   (`make transcripts` — analyse/mémo, hors apps)
```

## `video_catalog.json` — structure

```jsonc
{
  "schema_version": 3,
  "generated_at": "2026-10-19T...",
  "deduplication": { "method": "youtube_video_id", "..." : "..." },
  "summary": {
    "local_video_instances": 410,
    "unique_sources": 335,
    "duplicate_instances_collapsed": 141,
    "url_status_counts": { "verified": 171, "duration_verified": 61, "manual_verified": 103 }
  },
  "modules": [
    {
      "id": 1,
      "key": "self-paced/01-fundamentals-of-remote-sensing",
      "title": "Fundamentals of Remote Sensing",
      "category": "Self-Paced",
      "subcategory": null,
      "category_order": 1,
      "order": 1,
      "status": "ok",
      "source_video_ids": [192, 244]
    }
  ],
  "videos": [
    {
      "id": 244,
      "sha256": "ea57556a...",
      "name": "Fundamentals of Aquatic Remote Sensing",
      "duration_seconds": 2598.161,
      "youtube_url": "https://www.youtube.com/watch?v=1TBtJ8pTANQ",
      "youtube_video_id": "1TBtJ8pTANQ",
      "url_status": "verified",
      "canonical_module_id": 1,
      "module_ids": [1],
      "local_filenames": ["NASA ARSET： Fundamentals of Aquatic Remote Sensing.mp4"],
      "instances": [
        { "module_id": 1, "path": "organized/.../videos/....mp4", "sha256": "ea57556a..." }
      ]
    }
  ]
}
```

### Points clés

- Un **module** porte sa place dans le guide (`category`, `subcategory`, `order`, `status`
  `ok|partial|upcoming`) et pointe vers ses vidéos via `source_video_ids`.
- Une **vidéo** est unique (dédupliquée par `youtube_video_id`) et porte l'URL YouTube, la
  durée, le titre (`name`), et la liste des fichiers locaux d'origine (`instances`). Les
  anciens ids d'entrées fusionnées sont conservés dans `legacy_ids`.
- Le `summary.url_status_counts` indique le niveau de confiance des URLs
  (`verified` = titre + durée confirmés ; `duration_verified` = durée seule ; `manual_verified` = revu manuellement).

> **Titres (`name`) = vérité YouTube.** Les titres du catalogue avaient été générés par
> matching approximatif et étaient faux pour ~30 % des vidéos. Ils sont désormais
> réconciliés sur les titres réels via `scripts/youtube-titles.cjs` (qui écrit
> `youtube_titles.json`). Pour un même `youtube_video_id`, le `name` est identique partout.

> **Ordre des vidéos.** Le tri par numéro d'épisode (`Part X/N`, `Session X/N`) est
> appliqué **dans le code** (`buildCatalogIndex` / `buildIndex`). Le script
> `node scripts/reorder-catalog.mjs` (après `make build-core`) réordonne aussi les
> fichiers JSON pour que les données soient propres.

C'est ce fichier que **parsent** `@arset/core` (`parseCatalog` + `buildCatalogIndex`)
et que **sert** le backend.

## `arset_taxonomy.json` — ordre officiel

Ce fichier reprend les **129 trainings du guide PDF** (`OnlineResourceGuide_06_09_2026.pdf`),
dans l'ordre : catégorie > sous-catégorie > training. Chaque entrée porte `category`,
`subcategory`, `order`, `title`, `key`, `module_id` et `status` (`ok|partial|upcoming`).
Il est la référence pour vérifier qu'aucun training ne manque et pour générer les clés du
catalogue (`scripts/reorg-catalog.mjs`). Le module `hors-guide` contient les vidéos qui ne
correspondent à aucun training PDF.

## Mise à jour des ressources

Le catalogue est **édité directement** dans `resources/` (source de vérité). Il n'y a plus
d'import externe destructif. Après une modification du catalogue ou du parcours, recopier
les JSON bundlés du mobile :

```bash
make sync-mobile   # resources/… → apps/mobile/assets/
```

Outils associés :

- `node scripts/youtube-titles.cjs` — régénère `youtube_titles.json` (vérité YouTube).
- `node scripts/reorder-catalog.mjs` — réordonne `source_video_ids` (après `make build-core`).
- `make transcripts` — récupère les transcripts EN de **toutes** les vidéos du catalogue
  (sous-titres via `yt-dlp`) et les écrit en Markdown dans `resources/notes/transcripts/`,
  en miroir des `module.key` (`<video_id>-<slug>.md`, une ligne `[mm:ss] texte` par segment).
  Outil d'analyse/mémo (résumés, cartes mentales) — **rien n'est embarqué dans les apps**.
  Les sous-titres bruts `.vtt` restent dans `.raw/` (gitignoré). Options : `ARGS="--force"`,
  `ARGS="--limit 5"`, `ARGS="--only <id>"`, `ARGS="--no-merge"`. Un `_manifest.json` trace
  l'état de chaque vidéo (ok / skipped / failed).

Les JSON de `apps/mobile/assets/` sont **committés** (catalogue + parcours bundlés pour Android).
