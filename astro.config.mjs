import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://salihyalcin.github.io',
  base: '/saliyalcin.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});