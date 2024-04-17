import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const spinner = tv({
  slots: {
    svg: ['animate-spin', 'text-inherit', 'size-4'],
    circle: ['opacity-25'],
    path: ['opacity-75'],
  },
  variants: {},
})

export type SpinnerVariantProps = VariantProps<typeof spinner>
