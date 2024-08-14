import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

import { fixupPluginRules } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/*.js'],
  },
  ...compat.extends(
    './node_modules/gts/',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
      'simple-import-sort': simpleImportSort,
      '@typescript-eslint': typescriptEslint,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },

    rules: {
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': [
        'warn',
        {
          allowInterfaces: 'always',
        },
      ],
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'warn',

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      '@typescript-eslint/no-restricted-types': [
        'warn',
        {
          types: {
            'React.FC': {
              message:
                'Prefer using React.FunctionComponent instead of React.FC',
            },
          },
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^(@|components)(/.*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.?(css)$'],
          ],
        },
      ],
    },
  },
];
