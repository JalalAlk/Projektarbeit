import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jalalalk.github.io/Projektarbeit/',
  base: '/projektarbeit/', 
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/projektarbeit/'),
    },
  },
});
