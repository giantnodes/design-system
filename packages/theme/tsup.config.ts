import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  dts: true,
  entry: ['src/**/*.ts?(x)'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  outDir: 'dist',
}

export { config }
export default defineConfig({ ...config })
