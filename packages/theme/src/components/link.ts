import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const link = tv({
  slots: {
    link: ['text-sky-600', 'transition-all duration-200', 'rounded', 'disabled:cursor-default disabled:opacity-50'],
  },
  variants: {
    underline: {
      none: {
        link: ['no-underline'],
      },
      hover: {
        link: ['hover:underline disabled:hover:no-underline'],
      },
      always: {
        link: ['underline'],
      },
      active: {
        link: ['active:underline'],
      },
      focus: {
        link: ['focus:underline'],
      },
    },
  },
  defaultVariants: {
    underline: 'none',
  },
})

export type LinkVariantProps = VariantProps<typeof link>
