import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const dialog = tv({
  slots: {
    root: ['relative', 'outline-none'],
  },
  variants: {},
  defaultVariants: {},
})

export type DialogVariantProps = VariantProps<typeof dialog>
