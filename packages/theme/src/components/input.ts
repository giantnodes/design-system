import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { SIZE_VARIANTS, SIZE_VARIANTS_DEFAULT, using } from '~/constants/sizes'

export const input = tv({
  slots: {
    group: [
      'inline-flex items-center',
      'bg-foreground',
      'w-full',
      'has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed has-[:disabled]:pointer-events-none',
      'focus-within:outline-dashed focus-within:outline-offset-2 focus-within:outline-1',
    ],
    input: ['grow', 'bg-transparent', 'font-normal', 'placeholder-subtitle', 'outline-hidden'],
    addon: ['inline-flex items-center'],
  },
  variants: {
    color: {
      neutral: {
        group: ['text-content', 'border-shark', 'focus-within:outline-shark'],
      },
      brand: {
        group: ['text-brand', 'border-brand', 'focus-within:outline-brand'],
      },
      success: {
        group: ['text-success', 'border-success', 'focus-within:outline-success'],
      },
      info: {
        group: ['text-info', 'border-info', 'focus-within:outline-info'],
      },
      warning: {
        group: ['text-warning', 'border-warning', 'focus-within:outline-warning'],
      },
      danger: {
        group: ['text-danger', 'border-danger', 'focus-within:outline-danger'],
      },
    },
    shape: {
      none: {
        group: ['rounded-md'],
      },
      pill: {
        group: ['rounded-full'],
      },
    },
    size: {
      ...using('group', SIZE_VARIANTS),
    },
    variant: {
      none: {},
      outlined: {
        group: ['border', 'border-solid'],
      },
    },
  },
  defaultVariants: {
    size: SIZE_VARIANTS_DEFAULT,
    color: 'neutral',
    shape: 'none',
    variant: 'outlined',
  },
})

export type InputVariantProps = VariantProps<typeof input>
