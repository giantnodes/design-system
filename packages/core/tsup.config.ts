import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  dts: true,
  minify: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  sourcemap: true,
  target: 'esnext',
  outDir: 'dist',
}

export { config }
export default defineConfig({ ...config })
