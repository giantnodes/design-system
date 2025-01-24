import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const toggle = tv({
  slots: {
    label: [
      'group',
      'inline-flex items-center flex-shrink-0',
      'bg-foreground',
      'rounded-full',
      'border-2 border-transparent',
      'cursor-pointer',
      'transition-colors',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'focus-within:outline-dashed focus-within:outline-offset-2 focus-within:outline-1 focus-within:outline-shark',
    ],
    circle: [
      'block',
      'bg-white',
      'rounded-full',
      'translate-x-0 group-data-[selected=true]:translate-x-[100%] transition-all duration-200',
    ],
  },
  variants: {
    color: {
      neutral: {
        label: ['data-[selected=true]:bg-shark', 'data-[selected=true]:focus-within:outline-shark'],
      },
      brand: {
        label: ['data-[selected=true]:bg-brand', 'data-[selected=true]:focus-within:outline-brand'],
      },
      success: {
        label: ['data-[selected=true]:bg-success', 'data-[selected=true]:focus-within:outline-success'],
      },
      info: {
        label: ['data-[selected=true]:bg-info', 'data-[selected=true]:focus-within:outline-info'],
      },
      warning: {
        label: ['data-[selected=true]:bg-warning', 'data-[selected=true]:focus-within:outline-warning'],
      },
      danger: {
        label: ['data-[selected=true]:bg-danger', 'data-[selected=true]:focus-within:outline-danger'],
      },
    },
    size: {
      sm: {
        label: ['h-4 w-7'],
        circle: ['size-3'],
      },
      md: {
        label: ['h-5 w-9'],
        circle: ['size-4'],
      },
      lg: {
        label: ['h-6 w-11'],
        circle: ['size-5'],
      },
    },
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
  },
})

export type ToggleVariantProps = VariantProps<typeof toggle>
