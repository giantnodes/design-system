import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const typography = tv({
  slots: {
    heading: ['font-bold', 'text-shark-600', 'dark:text-shark-50'],
    text: ['text-sm', 'text-shark-400', 'dark:text-shark-200'],
  },
  variants: {
    level: {
      1: {
        title: ['text-4xl'],
      },
      2: {
        title: ['text-3xl'],
      },
      3: {
        title: ['text-2xl'],
      },
      4: {
        title: ['text-xl'],
      },
      5: {
        title: ['text-lg'],
      },
      6: {
        title: ['text-md'],
      },
    },
  },
  defaultVariants: {
    level: 1,
  },
})

export type TypographyVariantProps = VariantProps<typeof typography>
