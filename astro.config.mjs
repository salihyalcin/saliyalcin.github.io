import { defineConfig } from 'astro/config';

//
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