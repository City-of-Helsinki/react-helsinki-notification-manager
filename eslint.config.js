import eslint from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import-x';
import reactPlugin from '@eslint-react/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import vitestGlobals from 'eslint-config-vitest-globals/flat';
import tseslint from 'typescript-eslint';

const tsConfig = tseslint.config({
  files: ['lib/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
  ignores: ['dist', 'node_modules'],
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    eslintConfigPrettier,
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  plugins: {
    '@stylistic': stylisticPlugin,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    '@stylistic/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-ordering': ['warn'],
    '@typescript-eslint/no-require-imports': ['error'],
    'react-hooks/exhaustive-deps': 'warn',
    'array-bracket-spacing': ['warn', 'never'],
    'import-x/order': [
      'error',
      {
        groups: ['builtin', 'external', ['internal', 'parent'], ['sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import-x/no-duplicates': 0,
    'import-x/no-named-as-default-member': 0,
    'import-x/no-unresolved': 0,
    'max-len': [
      'warn',
      {
        code: 120,
      },
    ],
    'no-console': 'warn',
    'no-plusplus': 'error',
    'object-curly-spacing': ['warn', 'always'],
  },
});

const testConfig = tseslint.config({
  files: ['**/*.test.{ts,tsx}', 'lib/__tests__/**/*.{ts,tsx}'],
  extends: [vitestGlobals()],
});

export default [...tsConfig, ...testConfig];
