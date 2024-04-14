import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const card = tv({
  slots: {
    base: [
      'flex flex-col',
      'bg-white dark:bg-shark-800',
      'border border-solid border-shark-100 dark:border-shark-500',
      'divide-y divide-shark-100 dark:divide-shark-500',
      'rounded-lg',
      'overflow-hidden',
    ],
    header: ['text-shark-600 dark:text-shark-50', 'p-3'],
    body: ['flex-grow', 'text-shark-400 dark:text-shark-200', 'p-3'],
    footer: ['text-shark-400 dark:text-shark-200', 'p-3'],
  },
  variants: {
    transparent: {
      true: {
        base: ['!bg-transparent'],
      },
    },
  },
  defaultVariants: {
    transparent: false,
  },
})

export type CardVariantProps = VariantProps<typeof card>
