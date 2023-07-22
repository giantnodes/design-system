import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const button = tv({
  slots: {
    base: ['inline-flex', 'items-center', 'gap-1', 'text-white', 'rounded', 'transition-colors'],
  },
  variants: {
    color: {
      neutral: {
        base: ['bg-gray-500', 'hover:bg-gray-600', 'dark:bg-gray-600', 'hover:dark:bg-gray-700'],
      },
      success: {
        base: ['bg-green-500', 'hover:bg-green-600', 'dark:bg-green-600', 'hover:dark:bg-green-700'],
      },
      info: {
        base: ['bg-blue-500', 'hover:bg-blue-600', 'dark:bg-blue-600', 'hover:dark:bg-blue-700'],
      },
      warning: {
        base: ['bg-yellow-400', 'hover:bg-yellow-500', 'dark:bg-yellow-500', 'hover:dark:bg-yellow-600'],
      },
      danger: {
        base: ['bg-red-500', 'hover:bg-red-600', 'dark:bg-red-600', 'hover:dark:bg-red-700'],
      },
    },
    size: {
      xs: {
        base: ['px-2.5', 'py-1.5', 'text-xs'],
      },
      sm: {
        base: ['px-3', 'py-2', 'text-sm'],
      },
      md: {
        base: ['px-4', 'py-2', 'text-sm'],
      },
      lg: {
        base: ['px-4', 'py-2', 'text-base'],
      },
      xl: {
        base: ['px-6', 'py-3', 'text-base'],
      },
    },
    variant: {
      pill: {
        base: ['rounded-full'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
    size: 'md',
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
