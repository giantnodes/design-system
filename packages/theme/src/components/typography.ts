import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const typography = tv({
  slots: {
    paragraph: ['text-content'],
  },
  variants: {
    size: {
      xs: {
        paragraph: ['text-xs'],
      },
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
        paragraph: ['text-xs', 'text-subtitle'],
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export type TypographyVariantProps = VariantProps<typeof typography>
