import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  site: 'https://wilsonweb.netlify.app/',
  markdown: {
    shikiConfig: {
      theme: 'monokai',
      wrap: true
    }
  }
});