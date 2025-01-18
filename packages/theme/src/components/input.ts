import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const input = tv({
  slots: {
    group: [
      'flex gap-x-2',
      'px-3',
      'bg-foreground',
      'overflow-hidden',
      'has-[:disabled]:opacity-50',
      'focus-within:outline-dashed focus-within:outline-offset-2 focus-within:outline-1',
    ],
    input: ['flex-1', 'bg-foreground', 'w-full', 'font-normal', 'placeholder-subtitle', 'outline-none'],
    addon: ['flex items-center', 'bg-foreground'],
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
        group: ['text-warning', 'border-warning', 'focus-within:outline-warning'],
      },
      danger: {
        group: ['text-danger', 'border-danger', 'focus-within:outline-danger'],
      },
    },
    size: {
      xs: {
        group: ['text-xs'],
        input: ['h-6', 'placeholder:text-xs'],
      },
      sm: {
        group: ['text-sm'],
        input: ['h-8', 'placeholder:text-sm'],
      },
      md: {
        group: ['text-base'],
        input: ['h-10', 'placeholder:text-base'],
      },
      lg: {
        group: ['text-lg'],
        input: ['h-12', 'placeholder:text-lg'],
      },
    },
    shape: {
      none: {
        group: ['rounded-md'],
      },
      pill: {
        group: ['rounded-full'],
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
    shape: 'none',
    variant: 'outlined',
  },
})

export type InputVariantProps = VariantProps<typeof input>
