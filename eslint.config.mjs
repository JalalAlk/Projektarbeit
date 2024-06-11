import globals from 'globals';
import pluginJs from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  // Globale Einstellungen
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  // Astro-spezifische Einstellungen
  {
    files: ["*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    env: {
      node: true,
      "astro/astro": true,
      es2020: true,
    },
    parser: astroParser,
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".astro"],
      sourceType: "module",
    },
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
    },
  },

  // Einstellungen für JavaScript in .astro-Dateien
  {
    files: ["**/*.astro/*.js", "*.astro/*.js"],
    env: {
      browser: true,
      es2020: true,
    },
    parserOptions: {
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": "off",
    },
  },

  // Standard-Regeln
  {
    files: ["*.js"],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      indent: ['error', 2],
      'no-trailing-spaces': ['error'],
      'eol-last': ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-undef': ['error']
    }
  }
];
