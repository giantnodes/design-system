import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const divider = tv({
  slots: {
    divider: ['list-item', 'shrink-0', 'border-none', 'bg-shark-100 dark:bg-shark-500'],
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
