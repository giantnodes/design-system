import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const progress = tv({
  slots: {
    base: ['flex', 'bg-shark-500', '[&>*:not(:first-child)]:ml-0.5'],
    bar: ['first:rounded-l-full', 'last:rounded-r-full'],
  },
  variants: {
    radius: {
      none: {
        base: ['rounded-none'],
      },
      sm: {
        base: ['rounded-sm'],
      },
      md: {
        base: ['rounded-md'],
      },
      lg: {
        base: ['rounded-lg'],
      },
      full: {
        base: ['rounded-full'],
      },
    },
    size: {
      sm: {
        base: ['h-2'],
      },
      md: {
        base: ['h-3'],
      },
      lg: {
        base: ['h-4'],
      },
    },
  },
  defaultVariants: {
    radius: 'full',
    size: 'sm',
  },
})

export type ProgressVariantProps = VariantProps<typeof progress>
