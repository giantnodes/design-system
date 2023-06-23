import type { Options } from 'tsup'

import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  dts: false,
  treeshake: false,
  splitting: false,
  sourcemap: true,
  minify: true,
  entry: ['src/**/*.ts?(x)'],
  format: ['esm'],
  target: 'esnext',
  outDir: 'dist',
  esbuildOptions(options) {
    options.outbase = './src'
    options.banner = {
      js: '"use client"',
    }
  },
}

export { config }
export default defineConfig({ ...config })
