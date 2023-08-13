import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const card = tv({
  slots: {
    base: [
      'bg-background',
      'border',
      'border-solid',
      'border-foreground',
      'divide-y',
      'divide-foreground',
      'rounded-lg',
      'overflow-hidden',
      'dark:bg-shark-800',
      'dark:border-shark-500',
      'dark:divide-shark-500',
    ],
    header: ['text-shark-600', 'dark:text-shark-50', 'px-4', 'py-5', 'sm:px-6'],
    body: ['text-shark-400', 'dark:text-shark-200', 'px-4', 'py-5', 'sm:px-6'],
    footer: ['text-shark-400', 'dark:text-shark-200', 'px-4', 'py-5', 'sm:px-6'],
  },
  variants: {},
  defaultVariants: {},
})

export type CardVariantProps = VariantProps<typeof card>
