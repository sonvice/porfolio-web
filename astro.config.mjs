import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [setPrerender(),react(), mdx(), sitemap(), partytown({
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
  adapter: netlify()
});


function setPrerender() {
  return {
    name: 'set-prerender',
    hooks: {
      'astro:route:setup': ({ route }) => {
        // Para la ruta "/search", evitar la prerenderización (SSR dinámico)
        if (route.component.endsWith('/blog/search.astro')) {
          route.prerender = false;
        }
      },
    },
  };
  }