import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const checkbox = tv({
  slots: {
    label: [
      'group',
      'relative',
      'flex items-center',
      'bg-shark',
      'border-transparent',
      'rounded',
      'border-2',
      'cursor-pointer',
      'transition-all',
    ],
    icon: ['size-full'],
  },
  variants: {
    color: {
      neutral: {
        label: ['selected:border-partition'],
        icon: ['group-selected:stroke-partition'],
      },
      brand: {
        label: ['selected:border-brand'],
        icon: ['group-selected:stroke-brand'],
      },
      success: {
        label: ['selected:border-success'],
        icon: ['group-selected:stroke-success'],
      },
      info: {
        label: ['selected:border-info'],
        icon: ['group-selected:stroke-info'],
      },
      warning: {
        label: ['selected:border-warning'],
        icon: ['group-selected:stroke-warning'],
      },
      danger: {
        label: ['selected:border-danger'],
        icon: ['group-selected:stroke-danger'],
      },
    },
    size: {
      xs: {
        label: ['size-3'],
      },
      sm: {
        label: ['size-4'],
      },
      md: {
        label: ['size-5'],
      },
      lg: {
        label: ['size-6'],
      },
      xl: {
        label: ['size-7'],
      },
    },
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
  },
})

export type CheckboxVariantProps = VariantProps<typeof checkbox>
