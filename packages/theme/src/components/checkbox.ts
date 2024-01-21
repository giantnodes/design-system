import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const checkbox = tv({
  slots: {
    label: [
      'group',
      'relative',
      'flex items-center',
      'rounded',
      'border-2',
      'cursor-pointer',
      'transition-all',
      'bg-shark-100 dark:bg-shark-500',
      'border-transparent selected:border-brand-500',
    ],
    icon: ['size-full', 'group-selected:stroke-brand-500'],
  },
  variants: {
    size: {
      sm: {
        label: ['size-4'],
      },
      md: {
        label: ['size-5'],
      },
      lg: {
        label: ['size-6'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    isSelected: false,
    isDisabled: false,
  },
})

export type CheckboxVariantProps = VariantProps<typeof checkbox>
