// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://lupicards.github.io',
  base: 'LupiCards.github.io',
  integrations: [tailwind()]
});