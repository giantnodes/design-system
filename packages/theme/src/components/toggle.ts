import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const toggle = tv({
  slots: {
    label: ['group', 'relative', 'flex items-center', 'cursor-pointer'],
    wrapper: ['flex items-center', 'bg-transparent', 'rounded-full', 'duration-200', 'p-1'],
    circle: ['dot', 'bg-white', 'rounded-full', 'duration-200', 'translate-x-0 group-selected:translate-x-[100%]'],
  },
  variants: {
    size: {
      sm: {
        wrapper: ['w-10', 'h-5'],
        circle: ['size-4'],
      },
      md: {
        wrapper: ['w-12', 'h-6'],
        circle: ['size-5'],
      },
      lg: {
        wrapper: ['w-14', 'h-7'],
        circle: ['size-6'],
      },
    },
    color: {
      neutral: {
        wrapper: [
          'bg-shark-100 dark:bg-shark-700',
          'group-selected:bg-brand-800 group-selected:group-pressed:bg-brand-900',
        ],
      },
      brand: {
        wrapper: [
          'bg-shark-100 dark:bg-shark-700',
          'group-selected:bg-brand-800 group-selected:group-pressed:bg-brand-900',
        ],
      },
      success: {
        wrapper: [
          'bg-shark-100 dark:bg-shark-700',
          'group-selected:bg-green-800 group-selected:group-pressed:bg-green-900',
        ],
      },
      info: {
        wrapper: [
          'bg-shark-100 dark:bg-shark-700',
          'group-selected:bg-blue-800 group-selected:group-pressed:bg-blue-900',
        ],
      },
      warning: {
        wrapper: [
          'bg-shark-100 dark:bg-shark-700',
          'group-selected:bg-yellow-800 group-selected:group-pressed:bg-yellow-900',
        ],
      },
      danger: {
        wrapper: [
          'bg-shark-100 dark:bg-shark-700',
          'group-selected:bg-red-800 group-selected:group-pressed:bg-red-900',
        ],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'neutral',
  },
})

export type ToggleVariantProps = VariantProps<typeof toggle>
