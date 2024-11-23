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
    header: ['text-title'],
    body: ['flex-grow', 'text-content', 'overflow-auto'],
    footer: ['text-content'],
  },
  variants: {
    size: {
      sm: {
        header: ['py-1', 'px-2'],
        body: ['p-2'],
        footer: ['py-1', 'px-2'],
      },
      md: {
        header: ['py-2', 'px-3'],
        body: ['p-2'],
        footer: ['py-2', 'px-3'],
      },
      lg: {
        header: ['py-3', 'px-4'],
        body: ['p-3'],
        footer: ['py-3', 'px-4'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type CardVariantProps = VariantProps<typeof card>
