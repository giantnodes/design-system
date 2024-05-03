import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dialog = tv({
  slots: {
    dialog: [],
    overlay: ['flex', 'fixed inset-0 z-50', 'bg-black/50', 'min-h-full', 'overflow-y-auto', 'p-3'],
    modal: ['w-full max-w-2xl', 'overflow-hidden'],
    content: ['relative', 'outline-none'],
  },
  variants: {
    blur: {
      true: {
        overlay: ['backdrop-blur-sm'],
      },
    },
    placement: {
      center: {
        overlay: ['justify-center items-center'],
      },
      right: {
        overlay: ['justify-end'],
        content: ['h-full', '*:h-full'],
      },
    },
  },
  defaultVariants: {
    blur: false,
    placement: 'center',
  },
})

export type DialogVariantProps = VariantProps<typeof dialog>
