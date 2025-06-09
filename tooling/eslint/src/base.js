/// <reference types="./types.d.ts" />

import * as path from 'node:path'
import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import imports from 'eslint-plugin-import'
import turbo from 'eslint-plugin-turbo'
import tslint from 'typescript-eslint'

export default tslint.config(
  // Ignore files not tracked by VCS and any config files
  includeIgnoreFile(path.join(import.meta.dirname, '../../../.gitignore')),
  { ignores: ['**/*.config.*'] },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      import: imports,
      turbo: turbo,
    },
    extends: [
      eslint.configs.recommended,
      ...tslint.configs.recommended,
      ...tslint.configs.recommendedTypeChecked,
      ...tslint.configs.stylisticTypeChecked,
    ],
    rules: {
      ...turbo.configs.recommended.rules,
      'arrow-body-style': ['error', 'as-needed'],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        {
          allowConstantLoopConditions: true,
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { projectService: true } },
  }
)
