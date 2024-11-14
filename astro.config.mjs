import { defineConfig } from 'astro/config';

//Update the code
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