import { defineConfig } from 'astro/config';

// https://astro.build/config
//test
export default defineConfig({
  site: 'https://Projektarbeit.github.io',
  base: '/REPOSITORY_NAME/', // Ersetze 'REPOSITORY_NAME' mit dem Namen deines Repositories
  build: {
    outDir: 'dist', // Standard-Build-Verzeichnis ist 'dist'
  },
});

