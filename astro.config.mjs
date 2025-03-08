// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  integrations: [mdx(), react()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  }
});