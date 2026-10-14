import type { LearningPath } from "./types";

export function parseLearningPath(data: unknown): LearningPath {
  if (typeof data !== "object" || data === null) {
    throw new Error("Invalid learning path: expected an object");
  }
  const lp = data as LearningPath;
  if (!Array.isArray(lp.phases)) {
    throw new Error("Invalid learning path: missing phases array");
  }
  return lp;
}

/** Ensemble des clés de modules faisant partie du parcours (4 phases). */
export function pathModuleKeys(lp: LearningPath): Set<string> {
  const keys = new Set<string>();
  for (const phase of lp.phases) {
    for (const m of phase.modules) {
      keys.add(m.key);
    }
  }
  return keys;
}
