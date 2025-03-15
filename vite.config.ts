import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
  ],
  server: {
    // Дополнительные настройки сервера, если необходимо
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  }
});




