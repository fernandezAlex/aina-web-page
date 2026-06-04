import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const base = process.env.VITE_PUBLIC_BASE ?? "/aina-web-page/"

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
