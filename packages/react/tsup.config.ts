import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  bundle: false,
  minify: false,
  splitting: false,
  sourcemap: true,
  dts: true,
  outDir: 'dist',
  target: 'es2020',
  entry: ['src/**/*.ts*', '!src/**/*.stories.*'],
  format: ['cjs', 'esm'],
}

export { config }
export default defineConfig({ ...config })
