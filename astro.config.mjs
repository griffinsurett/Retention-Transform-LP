// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [mdx(), react(), partytown()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()]
  }
});