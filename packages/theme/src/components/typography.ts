import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const typography = tv({
  slots: {
    heading: ['font-bold'],
    text: ['text-sm', 'font-normal'],
  },
  variants: {
    variant: {
      title: {
        heading: ['text-shark-600', 'dark:text-shark-50'],
        text: ['text-shark-400', 'dark:text-shark-200'],
      },
      subtitle: {
        heading: ['text-shark-600', 'dark:text-shark-50'],
        text: ['text-shark-400', 'dark:text-shark-200', 'font-normal', 'text-xs'],
      },
    },
    level: {
      1: {
        heading: ['text-4xl'],
      },
      2: {
        heading: ['text-3xl'],
      },
      3: {
        heading: ['text-2xl'],
      },
      4: {
        heading: ['text-xl'],
      },
      5: {
        heading: ['text-lg'],
      },
      6: {
        heading: ['text-md'],
      },
    },
  },
  defaultVariants: {
    level: 1,
  },
})

export type TypographyVariantProps = VariantProps<typeof typography>
