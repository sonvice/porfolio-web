import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

import netlify from "@astrojs/netlify";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap(), partytown({
     dest: "~partytown",
    config: {
      forward: ["dataLayer.push"],
      debug: true
    }
  }), icon()],
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