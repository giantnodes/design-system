import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const button = tv({
  slots: {
    button: [
      'inline-flex items-center justify-center gap-2',
      'rounded-md',
      'border',
      'transition-all duration-200',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1',
      'disabled:opacity-50',
    ],
  },
  variants: {
    color: {
      neutral: {
        button: ['text-white', 'bg-shark/80 hover:bg-shark', 'border-shark', 'focus:outline-shark'],
      },
      brand: {
        button: ['text-white', 'bg-brand/80 hover:bg-brand', 'border-brand', 'focus:outline-brand'],
      },
      success: {
        button: ['text-white', 'bg-success/80 hover:bg-success', 'border-success', 'focus:outline-success'],
      },
      info: {
        button: ['text-white', 'bg-info/80 hover:bg-info', 'border-info', 'focus:outline-info'],
      },
      warning: {
        button: ['text-white', 'bg-warning/80 hover:bg-warning', 'border-warning', 'focus:outline-warning'],
      },
      danger: {
        button: ['text-white', 'bg-danger/80 hover:bg-danger', 'border-danger', 'focus:outline-danger'],
      },
    },
    size: {
      xs: {
        button: ['text-xs', 'px-2 py-1'],
      },
      sm: {
        button: ['text-sm', 'px-3 py-2'],
      },
      md: {
        button: ['text-sm', 'px-4 py-2'],
      },
      lg: {
        button: ['text-lg', 'px-4 py-2'],
      },
      xl: {
        button: ['text-xl', 'px-6 py-3'],
      },
    },
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
