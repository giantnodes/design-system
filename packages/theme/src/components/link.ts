import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const link = tv({
  slots: {
    link: [
      'text-inherit',
      'hover:text-sky-600',
      'disabled:cursor-default disabled:text-shark-200 disabled:hover:text-shark-200',
    ],
  },
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
    underline: {
      none: 'no-underline',
      hover: 'hover:underline disabled:hover:no-underline',
      always: 'underline',
      active: 'active:underline',
      focus: 'focus:underline',
    },
  },
  defaultVariants: {
    size: 'sm',
    underline: 'none',
  },
})

export type LinkVariantProps = VariantProps<typeof link>
