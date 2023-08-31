import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";
import path from "path";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vitest",
        "vue",
        "pinia",
        {
          "#imports": ["defineNuxtPlugin"],
        },
      ],
      dts: "./auto-imports.d.ts",
      dirs: ["./composables"],
      vueTemplate: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "~": path.resolve(__dirname, "./"),
    },
  },
});
