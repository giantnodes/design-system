import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const typography = tv({
  slots: {
    paragraph: ['text-content', 'text-inherit'],
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
        paragraph: ['text-base'],
      },
      lg: {
        paragraph: ['text-lg'],
      },
    },
    variant: {
      subtitle: {
        paragraph: ['text-subtitle'],
      },
    },
    truncate: {
      true: {
        paragraph: ['truncate', 'w-full'],
      },
    },
  },
})

export type TypographyVariantProps = VariantProps<typeof typography>
