// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "node:url";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://ectcetera.net",

  vite: {
    resolve: {
      alias: {
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
    assetsInclude: ["**/*.mp4", "**/*.webm", "**/*.mp3", "**/*.gif"],
  },

  image: {
    layout: "fixed",
  },

  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "prism",
  },

  adapter: node({
    mode: "standalone",
  }),
});
