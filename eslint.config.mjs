import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
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
