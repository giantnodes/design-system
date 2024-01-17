import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const checkbox = tv({
  slots: {
    label: [
      'group',
      'relative',
      'flex items-center',
      'rounded',
      'bg-shark-100 dark:bg-shark-500',
      'transition-all',
      'cursor-pointer disabled:cursor-not-allowed',
      'border-2 border-transparent selected:border-brand-500',
      'focused:outline-1 focused:outline-dashed focused:outline-offset-8 focused:outline-shark-100 focused:dark:outline-shark-400',
      '[&>svg]:selected:stroke-current',
    ],
    icon: ['text-brand-500', 'h-full', 'w-full'],
  },
  variants: {
    size: {
      sm: {
        label: ['h-4', 'w-4'],
      },
      md: {
        label: ['h-5', 'w-5'],
      },
      lg: {
        label: ['h-6', 'w-6'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type CheckboxVariantProps = VariantProps<typeof checkbox>
