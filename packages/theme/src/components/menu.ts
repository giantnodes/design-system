import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const menu = tv({
  slots: {
    menu: [],
    popover: ['rounded-md', 'dark:bg-shark-700'],
    list: ['flex flex-col gap-1', 'p-1', 'outline-none'],
    item: [
      'flex tems-center',
      'px-2 py-1',
      'rounded-md',
      'cursor-pointer',
      'outline-none',
      'text-shark-400 dark:text-shark-100',
      'hover:bg-shark-50 hover:dark:bg-shark-800',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ],
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
        item: ['text-sm'],
      },
      lg: {
        item: ['text-base'],
      },
      xl: {
        item: ['text-base'],
      },
    },
    status: {
      neutral: {
        popover: ['dark:border-shark-500'],
      },
      brand: {
        popover: ['border-brand-500'],
      },
      success: {
        popover: ['border-green-500'],
      },
      info: {
        popover: ['border-blue-500'],
      },
      warning: {
        popover: ['border-yellow-600'],
      },
      danger: {
        popover: ['border-red-500'],
      },
    },
    variant: {
      outlined: {
        popover: ['border', 'border-solid'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'neutral',
    variant: 'outlined',
  },
})

export type MenuVariantProps = VariantProps<typeof menu>
