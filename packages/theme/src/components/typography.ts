import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const typography = tv({
  slots: {
    paragraph: ['text-sm', 'antialiased', 'text-shark-400 dark:text-shark-100'],
  },
  variants: {
    variant: {
      subtitle: {
        paragraph: ['text-xs', 'text-shark-500 dark:text-shark-300'],
      },
    },
  },
})

export type TypographyVariantProps = VariantProps<typeof typography>
