import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const link = tv({
  slots: {
    link: [
      'text-sm',
      'text-inherit',
      'hover:underline hover:text-sky-600',
      'disabled:cursor-default disabled:text-shark-200 disabled:hover:text-shark-200 disabled:hover:no-underline',
    ],
  },
  variants: {},
  defaultVariants: {},
})

export type LinkVariantProps = VariantProps<typeof link>
