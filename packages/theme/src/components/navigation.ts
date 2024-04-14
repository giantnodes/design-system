import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const navigation = tv({
  slots: {
    base: ['relative', 'flex', 'z-10'],
    wrapper: [
      'relative',
      'flex',
      'gap-4 md:gap-6',
      'border-solid',
      'bg-white dark:bg-shark-800',
      'border-shark-100 dark:border-shark-500',
      'z-10',
    ],
    brand: ['flex', 'flex-nowrap', 'flex-row', 'justify-center', 'shrink-0'],
    segment: ['list-none', 'flex', 'gap-2'],
    title: ['text-sm', 'font-semibold', 'text-shark-600 dark:text-shark-50'],
    item: ['select-none', 'grow'],
    link: [
      'select-none',
      'grow',
      'flex',
      'items-center',
      'gap-x-3',
      'p-2',
      'text-sm',
      'text-shark-500 dark:text-shark-300',
      'transition-all duration-200',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1 focus:border-shark-100 focus:dark:outline-shark-400',
      'hover:text-shark-400 hover:dark:text-shark-100',
      '[&_svg]:hover:text-brand-500',
    ],
    content: [],
    divider: ['bg-shark-100 dark:bg-shark-500', 'border-shark-100 dark:border-shark-500'],
    trigger: ['flex', 'items-center'],
    viewport: [],
  },
  variants: {
    orientation: {
      vertical: {
        wrapper: ['h-full', 'flex-col', 'p-4', 'border-r'],
        segment: ['flex-col'],
        divider: ['h-px', 'w-full', 'my-2'],
      },
      horizontal: {
        wrapper: ['w-full', 'flex-row', 'items-center', 'px-4', 'md:px-6', 'border-b'],
        segment: ['items-center'],
        link: ['px-6'],
        divider: ['w-px', 'h-full', 'mx-2'],
      },
    },
    position: {
      sticky: {
        base: ['top-0', 'right-0', 'left-0', 'sticky'],
      },
      static: {
        base: ['static'],
      },
      floating: {
        base: ['top-0', 'right-0', 'left-0', 'sticky'],
        wrapper: ['mx-6', 'mt-6', 'rounded-xl', 'border'],
      },
    },
    size: {
      sm: {
        segment: ['items-center'],
      },
      md: {},
      lg: {},
    },
    variant: {
      highlight: {
        link: ['rounded-md', 'hover:bg-shark-50 hover:dark:bg-shark-700'],
      },
    },
    isSelected: {
      true: {
        link: [
          'font-semibold',
          'text-shark-400 dark:text-shark-100',
          'bg-shark-50 dark:bg-shark-700',
          '[&_svg]:text-brand-500',
        ],
      },
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      orientation: 'horizontal',
      class: {
        wrapper: ['h-14'],
      },
    },
    {
      size: 'md',
      orientation: 'horizontal',
      class: {
        wrapper: ['h-16'],
      },
    },
    {
      size: 'lg',
      orientation: 'horizontal',
      class: {
        wrapper: ['h-20'],
      },
    },
    {
      size: 'sm',
      orientation: 'vertical',
      class: {
        wrapper: ['w-20'],
      },
    },
    {
      size: 'md',
      orientation: 'vertical',
      class: {
        wrapper: ['w-64'],
      },
    },
    {
      size: 'lg',
      orientation: 'vertical',
      class: {
        wrapper: ['w-72'],
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    position: 'sticky',
    orientation: 'horizontal',
    variant: 'highlight',
  },
})

export type NavigationVariantProps = VariantProps<typeof navigation>
