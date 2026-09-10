import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tina from '@tinacms/astro/integration';
import { tinaAdminDevRedirect } from '@tinacms/astro/vite';

import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  redirects: {
    '/home': '/',
    // TODO this is hardcoded to an article that may or may not exist in
    // in the future.
    '/article': '/articles/glamping-in-the-serengeti',
  },
  integrations: [tina(), metaTags()],
  vite: {
    plugins: [tinaAdminDevRedirect()],
    ssr: { noExternal: ['@tinacms/astro', '@tinacms/bridge'] },
  },
});
