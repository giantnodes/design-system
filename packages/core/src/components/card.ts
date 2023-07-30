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
    ],
    header: ['text-title', 'px-4', 'py-5', 'sm:px-6'],
    body: ['text-subtitle', 'px-4', 'py-5', 'sm:px-6'],
    footer: ['text-subtitle', 'px-4', 'py-5', 'sm:px-6'],
  },
  variants: {},
  defaultVariants: {},
})

export type CardVariantProps = VariantProps<typeof card>
