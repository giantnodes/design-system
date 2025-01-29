import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { SIZE_VARIANTS, SIZE_VARIANTS_DEFAULT, using } from '~/constants/sizes'

export const button = tv({
  slots: {
    button: [
      'relative',
      'inline-flex justify-center items-center',
      'text-center font-regular',
      'cursor-pointer',
      'rounded-md',
      'border',
      'outline-hidden outline-0',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1',
    ],
  },
  variants: {
    block: {
      true: {
        button: ['w-full'],
      },
    },
    color: {
      none: {
        button: ['text-white', 'focus:outline-shark'],
      },
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
      ...using('button', SIZE_VARIANTS),
    },
  },
  defaultVariants: {
    color: 'brand',
    size: SIZE_VARIANTS_DEFAULT,
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
