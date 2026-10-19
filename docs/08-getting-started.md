# 08 — Démarrer avec React & TypeScript (guide débutant)

Ce guide est pour quelqu'un qui n'a jamais fait de React ni de TypeScript. Il se concentre
sur ce qui est utilisé dans `apps/desktop`.

## Les concepts minimaux

### 1. TypeScript = JavaScript + types

```ts
// JS : pas de type déclaré
function formatDuration(totalSeconds) { ... }

// TS : on déclare le type des paramètres et du retour
function formatDuration(totalSeconds: number): string { ... }
```

Les types **disparaissent à la compilation** (ils sont là uniquement pour aider le
développeur et l'éditeur). `make typecheck` les vérifie sans rien exécuter.

### 2. React = interface déclarée en composants

Un **composant** est une fonction qui retourne du "JSX" (du HTML dans du JavaScript) :

```tsx
function ModuleRow({ title }: { title: string }) {
  return (
    <div className="module-row">
      <span className="title">{title}</span>
    </div>
  );
}
```

- `{ title }` = les "props" (propriétés passées au composant).
- `{title}` dans le JSX = insérer la valeur de la variable.
- Un composant peut en utiliser d'autres : `<ModuleRow title="..."/>`.

### 3. L'état (`useState`)

`useState` crée une valeur **réactive** : quand elle change, React re-rend le composant.

```tsx
const [search, setSearch] = useState("");   // la valeur + la fonction pour la changer

<input value={search} onChange={(e) => setSearch(e.target.value)} />
```

`useState("")` renvoie un tableau `[valeur, setter]` qu'on déstructure.

### 4. Les effets (`useEffect`)

`useEffect` exécute du code **après** le rendu (ex. charger des données au démarrage) :

```tsx
useEffect(() => {
  (async () => {
    const [cat, prog] = await Promise.all([
      api.catalog(), api.progress(),
    ]);
    setCatalog(cat); setProgress(prog);
  })();
}, []);   // [] = "ne lancer qu'une fois au montage"
```

## Faire le tour de `App.tsx`

Ordre de lecture conseillé :

1. **`App()`** (le composant racine) : l'état global, `selectModule`, `toggleModule`,
   `toggleVideo`.
2. **`Sidebar`** : la colonne de gauche (phases + recherche + catégories).
3. **`ModuleRow`** : une ligne de module (clic + bouton ✓).
4. **`VideoCard`** : une carte vidéo — le plus intéressant (lecture + téléchargement).

## Le flux de données côté desktop

```
api.ts (fetch HTTP)
   │  renvoie des objets JSON typés
   ▼
App.tsx (useState / useEffect)
   │  passe des props
   ▼
composants enfants (Sidebar, VideoCard, ...)
```

- `api.ts` contient toutes les requêtes (voir [03-api.md](03-api.md)).
- `App.tsx` centralise l'état et les actions.
- Les composants enfants reçoivent l'état en **props** et remontent les événements en
  appelant les fonctions passées en props (ex. `onToggleModule`).

## Les types partagés (`@arset/core`)

`VideoView` est le type d'une vidéo prête à afficher :

```ts
interface VideoView {
  id: number;
  title: string;
  durationSeconds: number;
  youtubeUrl: string;
  youtubeVideoId: string;
  urlStatus: string;
  downloaded: boolean;     // true = déjà en local
  streamUrl: string;       // à utiliser si downloaded
}
```

`VideoCard` branche son affichage sur `downloaded` :

```tsx
{video.downloaded ? (
  <video src={video.streamUrl} />        // lecture locale
) : video.youtubeVideoId ? (
  <iframe src={youtubeEmbedUrl(video.youtubeVideoId)} />  // YouTube
) : (
  <div>Aucune source</div>
)}
```

## Pour modifier l'interface (exemple guidé)

Supposons qu'on veuille changer le texte « Marquer terminé » en « ✓ Fini ! ».

1. Ouvre `apps/desktop/src/App.tsx`.
2. Cherche « Marquer terminé » (dans `module-header`).
3. Remplace le texte.
4. Relance `make pc` (ou laisse le hot-reload Vite faire le travail).

C'est tout : Vite recompile automatiquement à chaque sauvegarde (hot reload).

## Pièges classiques à éviter

- **Oublier la `key`** dans une liste (`.map()` en React) → avertissement + bugs de rendu.
- **Modifier l'état directement** au lieu du setter (`videos.push(...)` au lieu de
  `setVideos(...)`) → React ne re-rend pas.
- **`useEffect` sans tableau de dépendances** → boucle infinie potentielle.
- **Encodage des clés de module** (qui contiennent `/`) dans les URLs → utiliser
  `encodeURIComponent()`.
