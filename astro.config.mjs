// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  }
});