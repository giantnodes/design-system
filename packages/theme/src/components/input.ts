import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const input = tv({
  slots: {
    group: [
      'flex gap-px',
      'bg-foreground',
      'rounded-md',
      'overflow-hidden',
      'has-[:disabled]:opacity-50',
      'focus-within:outline-dashed focus-within:outline-offset-2 focus-within:outline-1',
    ],
    input: ['flex-1', 'bg-foreground', 'w-full', 'font-normal', 'placeholder-subtitle', 'outline-none', 'p-1.5'],
    addon: ['flex items-center', 'bg-foreground', 'px-3'],
  },
  variants: {
    color: {
      neutral: {
        group: ['text-content', 'border-partition', 'focus-within:outline-partition'],
      },
      brand: {
        group: ['text-brand', 'border-brand', 'focus-within:outline-brand'],
      },
      success: {
        group: ['text-success', 'border-success', 'focus-within:outline-success'],
      },
      info: {
        group: ['text-info', 'border-info', 'focus-within:outline-info'],
      },
      warning: {
        group: ['text-warning', 'border-warning', 'focus-within:outline-danger'],
      },
      danger: {
        group: ['text-danger', 'border-danger', 'focus-within:outline-warning'],
      },
    },
    size: {
      sm: {
        group: ['text-sm'],
        input: ['h-8 min-h-8', 'placeholder:text-sm'],
      },
      md: {
        group: ['text-base'],
        input: ['h-10 min-h-10', 'placeholder:text-base'],
      },
      lg: {
        group: ['h-12 min-h-12', 'text-lg'],
        input: ['placeholder:text-lg'],
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
    color: 'neutral',
    variant: 'outlined',
  },
})

export type InputVariantProps = VariantProps<typeof input>
