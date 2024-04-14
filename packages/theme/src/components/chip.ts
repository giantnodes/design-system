import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const chip = tv({
  slots: {
    base: ['inline-flex', 'items-center', 'gap-1.5', 'font-medium'],
  },
  variants: {
    color: {
      neutral: {
        base: [
          'bg-shark-400/10',
          'ring-shark-400/30',
          'text-shark-400',
          'dark:bg-shark-200/10',
          'dark:ring-shark-200/30',
          'dark:text-shark-200',
        ],
      },
      brand: {
        base: ['bg-brand-400/10', 'ring-brand-400/30', 'text-brand-400'],
      },
      success: {
        base: ['bg-green-400/10', 'ring-green-400/30', 'text-green-400'],
      },
      info: {
        base: ['bg-blue-400/10', 'ring-blue-400/30', 'text-blue-400'],
      },
      warning: {
        base: ['bg-yellow-400/10', 'ring-yellow-400/30', 'text-yellow-400'],
      },
      danger: {
        base: ['bg-red-400/10', 'ring-red-400/30', 'text-red-400'],
      },
    },
    radius: {
      none: {
        base: ['rounded-none'],
      },
      sm: {
        base: ['rounded-sm'],
      },
      md: {
        base: ['rounded-md'],
      },
      lg: {
        base: ['rounded-lg'],
      },
      full: {
        base: ['rounded-full'],
      },
    },
    size: {
      xs: {
        base: ['px-1', 'py-0.5', 'text-xs'],
      },
      sm: {
        base: ['px-1.5', 'py-0.5', 'text-xs'],
      },
      md: {
        base: ['px-2', 'py-1', 'text-xs'],
      },
      lg: {
        base: ['px-2.5', 'py-1.5', 'text-xs'],
      },
    },
    variant: {
      flat: {
        base: '',
      },
      bordered: {
        base: ['ring-1', 'ring-inset'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
    radius: 'md',
    size: 'md',
    variant: 'bordered',
  },
})

export type ChipVariantProps = VariantProps<typeof chip>
