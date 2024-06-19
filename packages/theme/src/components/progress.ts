import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const progress = tv({
  slots: {
    base: ['flex', '[&>*:not(:first-child)]:ml-0.5'],
    bar: [],
  },
  variants: {
    radius: {
      none: {
        bar: ['first:rounded-l-none', 'last:rounded-r-none'],
      },
      sm: {
        bar: ['first:rounded-l-sm', 'last:rounded-r-sm'],
      },
      md: {
        bar: ['first:rounded-l-md', 'last:rounded-r-md'],
      },
      lg: {
        bar: ['first:rounded-l-lg', 'last:rounded-r-lg'],
      },
      full: {
        bar: ['first:rounded-l-full', 'last:rounded-r-full'],
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
    size: 'md',
  },
})

export type ProgressVariantProps = VariantProps<typeof progress>
