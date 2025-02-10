import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const checkbox = tv({
  slots: {
    label: [
      'group',
      'relative',
      'flex items-center',
      'bg-shark',
      'rounded',
      'border-2 border-transparent',
      'cursor-pointer',
      'transition-all',
    ],
    icon: ['size-full'],
  },
  variants: {
    color: {
      neutral: {
        label: ['selected:border-partition'],
        icon: ['group-data-[selected=true]:text-partition'],
      },
      brand: {
        label: ['selected:border-brand'],
        icon: ['group-data-[selected=true]:text-brand'],
      },
      success: {
        label: ['selected:border-success'],
        icon: ['group-data-[selected=true]:stroke-success'],
      },
      info: {
        label: ['selected:border-info'],
        icon: ['group-data-[selected=true]:stroke-info'],
      },
      warning: {
        label: ['selected:border-warning'],
        icon: ['group-data-[selected=true]:stroke-warning'],
      },
      danger: {
        label: ['selected:border-danger'],
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
