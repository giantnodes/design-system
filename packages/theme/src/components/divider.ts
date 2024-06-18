import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const divider = tv({
  slots: {
    divider: ['shrink-0', 'bg-partition', 'border-none'],
  },
  variants: {
    orientation: {
      horizontal: {
        divider: ['h-px', 'w-full'],
      },
      vertical: {
        divider: ['w-px', 'h-full'],
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export type DividerVariantProps = VariantProps<typeof divider>
