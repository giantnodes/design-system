import type { Options } from 'tsup'
import babel from 'esbuild-plugin-babel'
import { defineConfig } from 'tsup'

const config: Options = {
  clean: true,
  bundle: false,
  minify: false,
  splitting: false,
  sourcemap: true,
  dts: true,
  outDir: 'dist',
  target: 'es2022',
  entry: ['src/**/*.ts*', '!src/**/*.stories.*'],
  format: ['cjs', 'esm'],
  esbuildPlugins: [
    babel({
      config: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        plugins: [
          [
            'babel-plugin-react-compiler',
            {
              target: '19',
            },
          ],
        ],
      },
    }),
  ],
}

export { config }
export default defineConfig({ ...config })
