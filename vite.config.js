import { defineConfig } from "vite";
import mix from "vite-plugin-mix";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mix.default({
      handler: "./src/api/main.js",
    }),
  ],
});
