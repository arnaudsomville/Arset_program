import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  // GitHub Pages sert le site sous /<repo>/ — base adaptée au mode "pages".
  base: mode === "pages" ? "/Arset_program/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
  optimizeDeps: {
    include: ["@arset/core"],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /packages\/core/],
    },
  },
}));
