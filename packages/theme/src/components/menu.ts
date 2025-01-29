import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { SIZE, SIZE_VARIANTS_DEFAULT } from '~/constants/sizes'

export const menu = tv({
  slots: {
    menu: [
      'relative',
      'w-full',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1',
    ],
    popover: ['bg-foreground', 'border border-shark', 'rounded-md', 'w-(--trigger-width)'],
    list: ['flex flex-col gap-1', 'p-1.5', 'outline-hidden'],
    item: [
      'flex items-center gap-x-2',
      'px-2 py-1.5',
      'rounded',
      'outline-hidden',
      'truncate',
      'cursor-pointer',
      'hover:bg-middleground',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    ],
  },
  variants: {
    size: {
      xs: {
        item: [SIZE.text.xs],
      },
      sm: {
        item: [SIZE.text.sm],
      },
      md: {
        item: [SIZE.text.md],
      },
      lg: {
        item: [SIZE.text.lg],
      },
      xl: {
        item: [SIZE.text.xl],
      },
    },
  },
  defaultVariants: {
    size: SIZE_VARIANTS_DEFAULT,
  },
})

export type MenuVariantProps = VariantProps<typeof menu>
