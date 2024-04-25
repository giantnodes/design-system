import plugin from 'tailwindcss/plugin'
import { resolveTwcConfig } from 'tw-colors'

import { semantic } from '@/colors/semantic'

export const giantnodes = () => {
  const theme = {
    ...semantic,
  }

  // https://github.com/L-Blondy/tw-colors/blob/c8721d32c17dbd5a4da2e9275b5f36530d61bf40/lib/index.ts#L150
  const config = resolveTwcConfig(theme)

  return plugin(
    ({ addUtilities, addVariant }) => {
      // add the css variables to "@layer utilities" because:
      // - The Base layer does not provide intellisense
      // - The Components layer might get overriden by tailwind default colors in case of name clash
      addUtilities(config.utilities)

      // add the theme as variant e.g. "theme-[name]:text-2xl"
      config.variants.forEach(({ name, definition }) => addVariant(name, definition))
    },
    {
      theme: {
        extend: {
          // @ts-ignore tailwind types are broken
          colors: config.colors,
        },
      },
    }
  )
}
