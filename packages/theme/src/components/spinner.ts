import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { SIZE, using } from '~/constants/sizes'

export const spinner = tv({
  slots: {
    svg: ['animate-spin'],
    circle: ['opacity-25'],
    path: ['opacity-75'],
  },
  variants: {
    color: {
      neutral: {
        svg: ['text-inherit'],
      },
      brand: {
        svg: ['text-brand'],
      },
      success: {
        svg: ['text-success'],
      },
      info: {
        svg: ['text-info'],
      },
      warning: {
        svg: ['text-warning'],
      },
      danger: {
        svg: ['text-danger'],
      },
    },
    size: {
      ...using('svg', SIZE.size),
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SpinnerVariantProps = VariantProps<typeof spinner>
