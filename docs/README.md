# Documentation — Arset Program

Bienvenue dans la documentation du monorepo **Arset Program** (ARSET viewer v2).

> Ce dossier a été pensé pour un·e développeur·euse qui **découvre React et TypeScript** :
> les concepts clés sont expliqués, pas seulement listés.

## Sommaire

| Fichier | Contenu |
|---|---|
| [01-architecture.md](01-architecture.md) | Vue d'ensemble, arborescence, rôles des dossiers, diagramme d'architecture |
| [02-sequence-diagrams.md](02-sequence-diagrams.md) | Diagrammes de séquence (navigation, téléchargement, lecture, progression) |
| [03-api.md](03-api.md) | Référence complète de l'API du backend |
| [04-resources.md](04-resources.md) | Format des ressources JSON (catalogue, parcours, notes) |
| [05-apps.md](05-apps.md) | Fonctionnement interne de chaque app (server, desktop, mobile) |
| [06-testing.md](06-testing.md) | Point sur les tests : ce qui existe, comment lancer, quoi ajouter |
| [07-workflows.md](07-workflows.md) | Commandes Makefile : dev, build, export desktop & Android |
| [08-getting-started.md](08-getting-started.md) | Mini-guide React/TypeScript pour démarrer dans le code |

## En une phrase

Le projet lit un **catalogue JSON** (les vidéos NASA ARSET et leurs URLs YouTube), l'affiche
dans une **app React** (PC) ou **Expo/React Native** (Android), et permet de **télécharger
localement à la demande** les vidéos via un **backend Node/Express** qui pilote `yt-dlp`.

## Pour démarrer rapidement

```bash
make install   # tout installer
make pc        # lancer backend + desktop → http://localhost:5173
```

Voir [07-workflows.md](07-workflows.md) pour le détail des commandes.

## Où commencer selon ce que tu veux faire

- **Comprendre la structure globale** → [01-architecture.md](01-architecture.md)
- **Comprendre "que se passe-t-il quand je clique ?"** → [02-sequence-diagrams.md](02-sequence-diagrams.md)
- **Modifier l'API** → [03-api.md](03-api.md)
- **Modifier l'interface PC** → [05-apps.md](05-apps.md) puis [08-getting-started.md](08-getting-started.md)
- **Ajouter des tests** → [06-testing.md](06-testing.md)
