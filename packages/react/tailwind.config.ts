import type { Config } from 'tailwindcss'
import { giantnodes } from '@giantnodes/theme'
import ReactAriaComponents from 'tailwindcss-react-aria-components'

// https://javisperez.github.io/tailwindcolorshades

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './node_modules/@giantnodes/theme/dist/**/*.js'],
  plugins: [giantnodes(), ReactAriaComponents()],
  darkMode: 'class',
}

export default config
