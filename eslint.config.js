import js from '@eslint/js';
import globals from 'globals';
import solid from 'eslint-plugin-solid';
import tseslint from 'typescript-eslint';

const solidTypeScriptConfig = solid.configs['flat/typescript'];

export default [
  {
    ignores: ['dist', 'coverage', 'playwright-report', 'postcss.config.cjs']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...solidTypeScriptConfig,
    languageOptions: {
      ...solidTypeScriptConfig.languageOptions,
      parserOptions: {
        ...(solidTypeScriptConfig.languageOptions?.parserOptions ?? {}),
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...solidTypeScriptConfig.rules,
      'solid/reactivity': 'error'
    }
  }
];
