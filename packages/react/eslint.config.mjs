import base from '@giantnodes/eslint-config/base'
import react from '@giantnodes/eslint-config/react'

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['dist/**', '.storybook/**'],
  },
  ...base,
  ...react,
]
