import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  dts: true,
  entry: ['src/**/*.ts?(x)'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  outDir: 'dist',
  banner: { js: '"use client";' },
}

export { config }
export default defineConfig({ ...config })
