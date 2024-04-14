import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  dts: true,
  minify: true,
  outDir: 'dist',
  target: 'es2019',
  entry: ['src/**/*.ts?(x)'],
  format: ['cjs', 'esm'],
}

export { config }
export default defineConfig({ ...config })
