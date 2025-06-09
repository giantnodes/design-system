import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const tree = tv({
  slots: {
    root: [],
    item: [],
    content: [],
  },
  variants: {},
  defaultVariants: {},
})

export type TreeVariantProps = VariantProps<typeof tree>
