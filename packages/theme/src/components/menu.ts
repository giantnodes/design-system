import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const menu = tv({
  slots: {
    menu: [],
    popover: ['bg-foreground', 'border border-solid border-partition', 'rounded-md', 'p-1'],
    list: ['flex flex-col gap-1', 'outline-none'],
    item: [
      'flex flex-row items-center gap-2',
      'px-2 py-1',
      'rounded-md',
      'cursor-pointer',
      'outline-none',
      'text-content',
      'overflow-hidden',
      'disabled:opacity-50 disabled:cursor-default',
    ],
    trigger: ['flex', 'focus:outline-none'],
  },
  variants: {
    size: {
      xs: {
        item: ['text-xs'],
      },
      sm: {
        item: ['text-sm'],
      },
      md: {
        item: ['text-base'],
      },
      lg: {
        item: ['text-lg'],
      },
      xl: {
        item: ['text-xl'],
      },
    },
    color: {
      neutral: {
        item: ['hover:bg-middleground'],
      },
      brand: {
        item: ['hover:bg-brand/20'],
      },
      success: {
        item: ['hover:bg-success/20'],
      },
      info: {
        item: ['hover:bg-info/20'],
      },
      warning: {
        item: ['hover:bg-warning/20'],
      },
      danger: {
        item: ['hover:bg-danger/20'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'neutral',
  },
})

export type MenuVariantProps = VariantProps<typeof menu>
