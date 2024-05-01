import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const chip = tv({
  slots: {
    chip: ['inline-flex items-center gap-1.5', 'rounded-md', 'font-medium', 'border'],
  },
  variants: {
    color: {
      neutral: {
        chip: ['text-shark', 'bg-shark/20', 'border-shark'],
      },
      brand: {
        chip: ['text-brand', 'bg-brand/20', 'border-brand'],
      },
      success: {
        chip: ['text-success', 'bg-success/20', 'border-success'],
      },
      info: {
        chip: ['text-info', 'bg-info/20', 'border-info'],
      },
      warning: {
        chip: ['text-warning', 'bg-warning/20', 'border-warning'],
      },
      danger: {
        chip: ['text-danger', 'bg-danger/20', 'border-danger'],
      },
    },
    size: {
      sm: {
        chip: ['text-xs', 'px-1 py-0.5'],
      },
      md: {
        chip: ['text-xs', 'px-2 py-1'],
      },
      lg: {
        chip: ['text-xs', 'px-3 py-1.5'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
    size: 'md',
  },
})

export type ChipVariantProps = VariantProps<typeof chip>
