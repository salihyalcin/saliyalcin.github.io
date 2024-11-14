import { defineConfig } from 'astro/config';

//Update
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