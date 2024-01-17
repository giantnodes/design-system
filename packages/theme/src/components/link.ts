import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const link = tv({
  slots: {
    base: [
      'text-sm',
      'text-inherit',
      'hover:cursor-pointer hover:underline hover:text-sky-600',
      'data-[disabled=true]:text-shark-200 data-[disabled=true]:hover:text-shark-200 data-[disabled=true]:hover:no-underline',
    ],
  },
  variants: {},
  defaultVariants: {},
})

export type LinkVariantProps = VariantProps<typeof link>
