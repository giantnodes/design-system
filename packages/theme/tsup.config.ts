import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  minify: true,
  sourcemap: true,
  dts: true,
  outDir: 'dist',
  target: 'es2022',
  entry: ['src/**/*.ts*', '!src/**/*.stories.*'],
  format: ['cjs', 'esm'],
}

export { config }
export default defineConfig({ ...config })
