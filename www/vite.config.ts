// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

// import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },  
  }
  
});

