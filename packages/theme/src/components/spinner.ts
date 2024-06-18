import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const spinner = tv({
  slots: {
    svg: ['animate-spin', 'text-inherit'],
    circle: ['opacity-25'],
    path: ['opacity-75'],
  },
  variants: {
    size: {
      xs: {
        svg: ['size-2'],
      },
      sm: {
        svg: ['size-3'],
      },
      md: {
        svg: ['size-4'],
      },
      lg: {
        svg: ['size-5'],
      },
      xl: {
        svg: ['size-6'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SpinnerVariantProps = VariantProps<typeof spinner>
