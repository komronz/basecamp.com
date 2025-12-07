import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// removed lovable-tagger per request

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // When deploying to GitHub Pages for a repository site hosted at
  // https://komronz.github.io/basecamp.com/, Vite must use a base path
  // so asset references in built HTML point to `/basecamp.com/`.
  base: mode === "development" ? "/" : "/basecamp.com/",

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
