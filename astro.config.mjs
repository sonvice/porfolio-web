import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  site: "https://wilsonmunoz.com/",
  markdown: {
    shikiConfig: {
      theme: "monokai",
      wrap: true,
    },
  },
});
