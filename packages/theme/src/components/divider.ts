import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const divider = tv({
  slots: {
    divider: ['list-item', 'shrink-0', 'bg-partition', 'border-none'],
  },
  variants: {
    orientation: {
      horizontal: {
        divider: ['w-px', 'h-full'],
      },
      vertical: {
        divider: ['h-px', 'w-full'],
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type DividerVariantProps = VariantProps<typeof divider>
