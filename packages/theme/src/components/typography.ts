import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const typography = tv({
  slots: {
    paragraph: ['antialiased', 'text-shark-400 dark:text-shark-100'],
  },
  variants: {
    size: {
      sm: {
        paragraph: ['text-sm'],
      },
      md: {
        paragraph: ['text-md'],
      },
      lg: {
        paragraph: ['text-lg'],
      },
    },
    variant: {
      subtitle: {
        paragraph: ['text-xs', 'text-shark-500 dark:text-shark-300'],
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export type TypographyVariantProps = VariantProps<typeof typography>
