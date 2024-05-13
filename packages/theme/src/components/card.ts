import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const card = tv({
  slots: {
    card: [
      'flex flex-col',
      'bg-middleground',
      'border border-solid border-partition',
      'divide-y divide-partition',
      'rounded-lg',
      'overflow-auto',
    ],
    header: ['text-title', 'p-3'],
    body: ['flex-grow', 'text-content', 'p-3', 'overflow-auto'],
    footer: ['text-content', 'p-3'],
  },
  variants: {},
})

export type CardVariantProps = VariantProps<typeof card>
