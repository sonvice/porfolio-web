import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react(), mdx(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  site: "https://wilsonmunoz.com/",
  markdown: {
    shikiConfig: {
      theme: "monokai",
      wrap: true
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  adapter: netlify()
});


