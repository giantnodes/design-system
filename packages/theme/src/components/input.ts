import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const input = tv({
  slots: {
    input: [
      'flex',
      'flex-row',
      'items-center',
      'w-full',
      'p-1.5',
      'text-shark-600',
      'dark:text-shark-50',
      'rounded-md',
    ],
    control: ['grow', 'bg-transparent', 'focus:outline-none', 'text-shark-600', 'dark:text-shark-50'],
    addon: ['flex', 'pointer-events-none', 'px-1.5'],
  },
  variants: {
    size: {
      sm: {},
      md: {
        base: ['text-sm'],
      },
      lg: {},
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
    isFocused: {
      true: {
        input: ['border-blue-500', 'dark:border-shark-400'],
      },
    },
    isDisabled: {
      true: {
        input: ['cursor-not-allowed'],
        control: ['cursor-not-allowed'],
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
