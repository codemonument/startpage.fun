// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

import netlify from "@astrojs/netlify";

import tailwindcss from "@tailwindcss/vite";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), db()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
