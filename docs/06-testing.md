# 06 — Tests : état des lieux

## Ce qui existe aujourd'hui

### 1. Tests unitaires de `@arset/core` ✅

Fichier : `packages/core/src/format.test.ts`, exécuté avec le runner natif de Node
(`node:test` + `node:assert`).

```bash
make test          # = npm run test -w @arset/core  →  node --test dist/
```

Il couvre les fonctions pures : `formatDuration`, `youtubeIdFromUrl`, `youtubeEmbedUrl`,
`categoryOf`. Ces fonctions sont idéales à tester car **sans effet de bord** (même entrée
→ même sortie).

### 2. Typecheck partout ✅

```bash
make typecheck     # tsc --noEmit sur core + server + desktop + mobile
```

Le typecheck ne lance pas de tests, mais **vérifie les types TypeScript** : c'est déjà une
sorte de "test statique" qui attrape beaucoup d'erreurs (typos, mauvais usages d'API).

## Ce qui n'existe PAS encore

| Cible | Outil recommandé | Pourquoi c'est important |
|---|---|---|
| Backend (`apps/server`) | **Vitest** + **Supertest** | Tester les routes HTTP (catalogue, download, progress) sans lancer un vrai serveur. |
| Frontend (`apps/desktop`) | **Vitest** + **Testing Library** | Tester le rendu des composants React (ex. la carte vidéo change selon `downloaded`). |
| Core (`@arset/core`) | rester sur `node:test` ou passer à **Vitest** | Unifier le tooling. |
| Mobile | hors scope immédiat (nécessite un émulateur) | Tests de rendu RN via `jest-expo`. |

## Pourquoi ajouter des tests ?

1. **Régressions** : en modifiant `downloads.ts` ou `api.ts`, on risque de casser un
   comportement sans s'en rendre compte.
2. **Confiance** : le téléchargement/stream est critique ; le couvrir évite les surprises.
3. **Documentation vivante** : un test montre comment une fonction est censée s'utiliser.

## Exemple de test backend (à ajouter)

Avec **Vitest** + **Supertest**, on peut tester une route sans réseau réel :

```ts
// apps/server/src/index.test.ts (proposition)
import request from "supertest";
import { describe, it, expect } from "vitest";
// ... exporter `app` depuis index.ts pour le test

describe("GET /api/health", () => {
  it("répond ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
```

> Pour ça, il faut **exporter `app`** depuis `index.ts` (séparer la création de l'app du
> `app.listen()`), comme c'est souvent fait.

## Exemple de test frontend (à ajouter)

```tsx
// apps/desktop/src/VideoCard.test.tsx (proposition)
import { render, screen } from "@testing-library/react";
import { VideoCard } from "./App";

it("affiche le bouton Télécharger si la vidéo n'est pas téléchargée", () => {
  render(<VideoCard video={{ downloaded: false, ... }} ... />);
  expect(screen.getByText(/Télécharger/)).toBeInTheDocument();
});
```

## Recommandation de mise en place

1. Ajouter **Vitest** en dépendance de dev racine (un seul runner pour core + server + desktop).
2. Exporter `app` depuis `apps/server/src/index.ts` pour tester les routes.
3. Ajouter 2–3 tests ciblés (health, catalogue, toggle progression) côté serveur.
4. Ajouter 1–2 tests de composants (VideoCard) côté desktop.
5. Ajouter une cible `make test` qui lance tout (`vitest run` dans chaque workspace).

## Lancer les tests actuels

```bash
make test          # core uniquement pour l'instant
make typecheck     # vérification statique complète
```
