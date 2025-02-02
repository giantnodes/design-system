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
        label: ['data-[selected=true]:border-partition'],
        icon: ['group-data-[selected=true]:stroke-partition'],
      },
      brand: {
        label: ['data-[selected=true]:border-brand'],
        icon: ['group-data-[selected=true]:stroke-brand'],
      },
      success: {
        label: ['data-[selected=true]:border-success'],
        icon: ['group-data-[selected=true]:stroke-success'],
      },
      info: {
        label: ['data-[selected=true]:border-info'],
        icon: ['group-data-[selected=true]:stroke-info'],
      },
      warning: {
        label: ['data-[selected=true]:border-warning'],
        icon: ['group-data-[selected=true]:stroke-warning'],
      },
      danger: {
        label: ['data-[selected=true]:border-danger'],
        icon: ['group-data-[selected=true]:stroke-danger'],
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
