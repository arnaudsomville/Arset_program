// Tokens de design partagés.
// - Desktop : `cssVariables()` est injecté dans le <head> avant le rendu React.
// - Mobile  : les objets sont consommés directement dans StyleSheet.create().

export const colors = {
  bg: "#09090b",
  bgRaised: "#0e0e11",
  surface: "rgba(24, 24, 27, 0.62)",
  surfaceSolid: "#131316",
  surfaceHover: "rgba(255, 255, 255, 0.04)",
  surfaceActive: "rgba(39, 39, 42, 0.82)",
  border: "rgba(39, 39, 42, 0.72)",
  borderStrong: "rgba(63, 63, 70, 0.9)",
  text: "#f4f4f5",
  textSecondary: "#a1a1aa",
  textMuted: "#71717a",
  textFaint: "#52525b",
  accent: "#64b5f6",
  accentStrong: "#8ecbfa",
  accentSoft: "rgba(100, 181, 246, 0.12)",
  accentBorder: "rgba(100, 181, 246, 0.30)",
  success: "#34d399",
  successSoft: "rgba(52, 211, 153, 0.12)",
  successBorder: "rgba(52, 211, 153, 0.30)",
  star: "#fbbf24",
  danger: "#f87171",
  dangerSoft: "rgba(248, 113, 113, 0.10)",
  dangerBorder: "rgba(248, 113, 113, 0.28)",
  overlay: "rgba(9, 9, 11, 0.72)",
  tile: "#f2f4f6",
  white: "#ffffff",
} as const;

export const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 22,
  pill: 999,
} as const;

export const fontSize = {
  xxs: 10,
  xs: 11,
  sm: 12,
  md: 13,
  base: 14,
  lg: 16,
  xl: 20,
  xxl: 26,
  display: 32,
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
} as const;

export const motion = {
  fast: 150,
  base: 200,
  slow: 320,
} as const;

export const breakpoint = {
  sm: 640,
  md: 900,
  lg: 1024,
  xl: 1280,
} as const;

export const font = {
  body: '"Inter Variable", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
  display: '"Space Grotesk Variable", "Space Grotesk", "Inter Variable", system-ui, sans-serif',
  mono: '"SFMono-Regular", ui-monospace, "JetBrains Mono", monospace',
} as const;

export const shadow = {
  card: "0 1px 2px rgba(0, 0, 0, 0.4)",
  cardHover: "0 18px 40px -16px rgba(0, 0, 0, 0.85)",
  panel: "0 24px 60px -30px rgba(0, 0, 0, 0.9)",
  glowAccent: "0 0 0 1px rgba(100, 181, 246, 0.35), 0 0 24px -6px rgba(100, 181, 246, 0.55)",
  glowSuccess: "0 0 8px rgba(52, 211, 153, 0.55)",
} as const;

const kebab = (key: string): string =>
  key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

const px = (value: number): string => `${value}px`;

/** Sérialise les tokens en custom properties CSS (`:root { --ev-... }`). */
export function cssVariables(selector = ":root"): string {
  const lines: string[] = [];

  for (const [key, value] of Object.entries(colors)) {
    lines.push(`--ev-color-${kebab(key)}: ${value};`);
  }
  for (const [key, value] of Object.entries(space)) {
    lines.push(`--ev-space-${key}: ${px(value)};`);
  }
  for (const [key, value] of Object.entries(radius)) {
    lines.push(`--ev-radius-${key}: ${px(value)};`);
  }
  for (const [key, value] of Object.entries(fontSize)) {
    lines.push(`--ev-font-${key}: ${px(value)};`);
  }
  for (const [key, value] of Object.entries(fontWeight)) {
    lines.push(`--ev-weight-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(motion)) {
    lines.push(`--ev-motion-${key}: ${value}ms;`);
  }
  for (const [key, value] of Object.entries(breakpoint)) {
    lines.push(`--ev-bp-${key}: ${px(value)};`);
  }
  for (const [key, value] of Object.entries(font)) {
    lines.push(`--ev-font-family-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(shadow)) {
    lines.push(`--ev-shadow-${kebab(key)}: ${value};`);
  }

  return `${selector} {\n  ${lines.join("\n  ")}\n}\n`;
}

export const theme = {
  colors,
  space,
  radius,
  fontSize,
  fontWeight,
  motion,
  breakpoint,
  font,
  shadow,
} as const;

/** Alias explicite pour les consommateurs (mobile : `tokens.colors`, etc.). */
export const tokens = theme;

export type Theme = typeof theme;
