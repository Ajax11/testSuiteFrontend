import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

const reactHooksRules = reactHooks.configs['recommended-latest'].rules;
const reactRefreshRules = reactRefresh.configs.vite.rules;

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    extends: [
      js.configs.recommended,
      prettierConfig, // ✅ importar directamente eslint-config-prettier
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // ✅ Reglas de react-hooks
      ...reactHooksRules,

      // ✅ Reglas de react-refresh
      ...reactRefreshRules,

      // ✅ Ejecutar prettier según tu .prettierrc
      'prettier/prettier': 'error',
    },
  },
]);
