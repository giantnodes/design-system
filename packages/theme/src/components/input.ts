import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const input = tv({
  slots: {
    group: ['flex gap-px', 'bg-foreground', 'rounded-md', 'overflow-hidden', 'has-[:disabled]:opacity-50'],
    input: ['flex-1', 'bg-foreground', 'w-full', 'outline-none', 'placeholder-subtitle', 'py-2 px-3'],
    addon: ['flex items-center', 'bg-foreground', 'px-3'],
  },
  variants: {
    size: {
      xs: {
        group: ['text-xs'],
        input: ['placeholder:text-xs'],
      },
      sm: {
        group: ['text-sm'],
        input: ['placeholder:text-sm'],
      },
      md: {
        group: ['text-md'],
        input: ['placeholder:text-md'],
      },
      lg: {
        group: ['text-lg'],
        input: ['placeholder:text-lg'],
      },
      xl: {
        group: ['text-xl'],
        input: ['placeholder:text-xl'],
      },
    },
    status: {
      neutral: {
        group: ['text-content', 'border-partition'],
      },
      brand: {
        group: ['text-brand', 'border-brand'],
      },
      success: {
        group: ['text-success', 'border-success'],
      },
      info: {
        group: ['text-info', 'border-info'],
      },
      warning: {
        group: ['text-warning', 'border-warning'],
      },
      danger: {
        group: ['text-danger', 'border-danger'],
      },
    },
    variant: {
      none: {},
      outlined: {
        group: ['border', 'border-solid'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'neutral',
    variant: 'outlined',
  },
})

export type InputVariantProps = VariantProps<typeof input>
