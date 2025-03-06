// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mdx(), react()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  }
});