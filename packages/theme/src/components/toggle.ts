import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const toggle = tv({
  slots: {
    label: [
      'group',
      'relative',
      'inline-flex items-center justify-start',
      'max-w-fit',
      'rounded-full',
      'cursor-pointer',
      'touch-none',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1',
    ],
    container: [
      'relative',
      'inline-flex items-center justify-start flex-shrink-0',
      'bg-foreground',
      'rounded-full',
      'transition-all',
      'outline-none',
      'overflow-hidden',
      'px-1',
    ],
    circle: [
      'flex items-center justify-center',
      'bg-white',
      'shadow-small',
      'rounded-full',
      'translate-x-0 group-selected:translate-x-[100%] transition-all duration-200',
      'z-10',
    ],
  },
  variants: {
    size: {
      sm: {
        container: ['h-5 w-10'],
        circle: ['size-4'],
      },
      md: {
        container: ['h-6 w-12'],
        circle: ['size-5'],
      },
      lg: {
        container: ['h-7 w-14'],
        circle: ['size-6'],
      },
    },
    color: {
      brand: {
        label: ['focus:outline-brand'],
        container: ['group-selected:bg-brand group-selected:group-pressed:bg-brand'],
      },
      success: {
        label: ['focus:outline-success'],
        container: ['group-selected:bg-success group-selected:group-pressed:bg-success'],
      },
      info: {
        label: ['focus:outline-info'],
        container: ['group-selected:bg-info group-selected:group-pressed:bg-info'],
      },
      warning: {
        label: ['focus:outline-warning'],
        container: ['group-selected:bg-warning group-selected:group-pressed:bg-warning'],
      },
      danger: {
        label: ['focus:outline-danger'],
        container: ['group-selected:bg-danger group-selected:group-pressed:bg-danger'],
      },
    },
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
  },
})

export type ToggleVariantProps = VariantProps<typeof toggle>
