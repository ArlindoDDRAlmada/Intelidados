import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// On GitHub Pages this project is served from https://<user>.github.io/Intelidados/,
// so the production build needs the repo name as its base path. Dev stays at "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Intelidados/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))

