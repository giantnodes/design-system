import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const modal = tv({
  slots: {
    root: ['flex', 'fixed inset-0 z-50', 'bg-black/50', 'min-h-full', 'overflow-y-auto'],
    content: ['relative', 'outline-none'],
  },
  variants: {
    blur: {
      true: {
        root: ['backdrop-blur-sm'],
      },
    },
    placement: {
      center: {
        root: ['justify-center items-center'],
      },
      left: {
        root: ['justify-start'],
      },
      right: {
        root: ['justify-end'],
        content: ['h-full', '*:h-full'],
      },
    },
    position: {
      none: {},
      floating: {
        root: ['p-3'],
      },
    },
  },
  defaultVariants: {
    blur: false,
    placement: 'center',
    position: 'floating',
  },
})

export type ModalVariantProps = VariantProps<typeof modal>
