import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const input = tv({
  slots: {
    input: ['flex flex-row', 'items-center', 'w-full', 'p-1.5', 'rounded-md', 'text-shark-400 dark:text-shark-200'],
    control: [
      'grow',
      'bg-transparent',
      'text-shark-400 dark:text-shark-200',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      'placeholder:font-normal placeholder:text-sm',
    ],
    addon: ['flex', 'pointer-events-none', 'px-1.5'],
  },
  variants: {
    size: {
      sm: {
        input: ['text-xs'],
      },
      md: {
        input: ['text-sm'],
      },
      lg: {
        input: ['text-md'],
      },
    },
    status: {
      neutral: {
        input: ['dark:border-shark-500'],
      },
      brand: {
        input: ['border-brand-500'],
      },
      success: {
        input: ['border-green-500'],
      },
      info: {
        input: ['border-blue-500'],
      },
      warning: {
        input: ['border-yellow-600'],
      },
      danger: {
        input: ['border-red-500'],
      },
    },
    variant: {
      none: {
        input: [],
      },
      outlined: {
        input: ['border', 'border-solid'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'neutral',
    variant: 'outlined',
  },
})

export type InputVariantProps = VariantProps<typeof input>
