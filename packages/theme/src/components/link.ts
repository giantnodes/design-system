import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const link = tv({
  slots: {
    base: ['text-sm', 'text-inherit', 'hover:cursor-pointer', 'hover:text-sky-600', 'hover:underline'],
  },
  variants: {},
  defaultVariants: {},
})

export type LinkVariantProps = VariantProps<typeof link>
