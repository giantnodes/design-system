import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const heading = tv({
  slots: {
    heading: ['leading-none', 'antialiased', 'tracking-tight', 'text-shark-600 dark:text-shark-50'],
  },
  variants: {
    level: {
      1: {
        heading: ['text-5xl'],
      },
      2: {
        heading: ['text-4xl'],
      },
      3: {
        heading: ['text-3xl'],
      },
      4: {
        heading: ['text-2xl'],
      },
      5: {
        heading: ['text-xl'],
      },
      6: {
        heading: ['text-lg'],
      },
    },
  },
  defaultVariants: {
    level: 1,
  },
})

export type HeadingVariantProps = VariantProps<typeof heading>
