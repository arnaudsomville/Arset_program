/**
 * Extraction du numéro d'épisode d'un titre de vidéo ARSET, pour ordonner les
 * séries à l'intérieur d'un module (ex. « ..., Part 2/3 », « ..., Session 1/4 »).
 *
 * Le catalogue n'expose pas d'ordre fiable : on parse le marqueur de partie /
 * session du titre. Retourne un nombre (Infinity si aucun marqueur) — utilisable
 * directement comme clé de tri stable (les vidéos sans numéro passent en fin).
 */
export function episodeNumber(name: string): number {
  // "Part 2/3", "Parte 2 de 3", "Session 1/4", "Sesión 2 de 3"
  let m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\s*(?:\/|\s*de\s*)\s*(\d+)/i.exec(name);
  if (m) return Number(m[1]);
  // "Part 3", "Session 2"
  m = /\b(?:part|parte|session|sesi[oó]n)\s*(\d+)\b/i.exec(name);
  if (m) return Number(m[1]);
  // ", 1/2" (titres localisés)
  m = /[,:]\s*(\d+)\s*\/\s*(\d+)\s*$/.exec(name);
  if (m) return Number(m[1]);
  // "1/2" en fin de titre
  m = /\b(\d+)\s*\/\s*(\d+)\s*$/.exec(name);
  if (m) return Number(m[1]);
  return Infinity;
}

/** Comparateur stable d'épisodes (ordre croissant). */
export function compareEpisodes(a: string, b: string): number {
  return episodeNumber(a) - episodeNumber(b);
}
