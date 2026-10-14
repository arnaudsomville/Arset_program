# 04 — Ressources (données centralisées)

Les données vivent dans `resources/`. Elles sont **committées** (légères : ~1 Mo) et
synchronisées depuis la source par `make sync`.

```
resources/
├── catalog/
│   ├── video_catalog.json     # ← LA source de vérité (269 vidéos, 126 modules)
│   └── video_urls.json        #   mapping module → [{file, url}] (historique)
├── learning_path.json         # parcours 4 phases → clés de modules
└── notes/                     # Plan.md, notes.md, transcripts (markdown)
```

## `video_catalog.json` — structure

```jsonc
{
  "schema_version": 2,
  "generated_at": "2026-09-28T14:21:32+00:00",
  "deduplication": { "method": "sha256", "..." : "..." },
  "summary": {
    "local_video_instances": 410,
    "unique_sources": 269,
    "duplicate_instances_collapsed": 141,
    "url_status_counts": { "verified": 186, "duration_verified": 64, "manual_verified": 19 }
  },
  "modules": [
    {
      "id": 1,
      "key": "organized/self-paced/01-fundamentals-of-remote-sensing",
      "title": "Module 01 — Fundamentals of Remote Sensing",
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

- Un **module** pointe vers des vidéos via `source_video_ids`.
- Une **vidéo** est unique (dédupliquée par `sha256`) et porte l'URL YouTube, la durée,
  le titre vérifié (`name`), et la liste des fichiers locaux d'origine (`instances`).
- Le `summary.url_status_counts` indique le niveau de confiance des URLs
  (`verified` = titre + durée confirmés ; `duration_verified` = durée seule ; `manual_verified` = revu manuellement).

C'est ce fichier que **parsent** `@arset/core` (`parseCatalog` + `buildCatalogIndex`)
et que **sert** le backend.

## `learning_path.json` — structure

```jsonc
{
  "schema_version": 1,
  "phases": [
    {
      "name": "Phase 1 — Fondations",
      "modules": [
        { "key": "organized/self-paced/01-fundamentals-of-remote-sensing", "title": "Fundamentals of Remote Sensing" }
      ]
    }
  ]
}
```

Chaque `key` doit correspondre à une clé de module du catalogue. C'est ce fichier qui
définit **le parcours affiché en premier** dans la sidebar (les modules `organized/*`).
Les modules `other_modules/*` du catalogue apparaissent ensuite dans
« Modules complémentaires ».

## Synchronisation (`make sync`)

```bash
make sync                          # depuis ~/Documents/Remote Sensing Classes
make sync ARSET_SOURCE=/autre/path # source personnalisée
```

Ce que fait `sync` :

1. `video_catalog.json` + `video_urls.json` → `resources/catalog/`
2. `Plan.md`, `notes.md`, `Transcripts/` → `resources/notes/`
3. `video_catalog.json` + `learning_path.json` → `apps/mobile/assets/` (bundlé pour Android)

> Les JSON copiés dans `apps/mobile/assets/` sont **gitignorés** (régénérés par `make sync`),
> pour ne pas dupliquer le catalogue dans le dépôt.
