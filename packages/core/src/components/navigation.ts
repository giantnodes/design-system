import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const navigation = tv({
  slots: {
    base: ['relative', 'flex', 'z-50'],
    wrapper: [
      'relative',
      'flex',
      'gap-4',
      'md:gap-6',
      'z-50',
      'bg-white',
      'dark:bg-bunker',
      'border-solid',
      'border-gray-200',
      'dark:border-mineshaft-500',
    ],
    brand: ['flex', 'flex-nowrap', 'flex-row', 'justify-center', 'shrink-0'],
    segment: ['list-none', 'flex', 'gap-1'],
    item: [],
    link: [
      'flex',
      'items-center',
      'gap-x-3',
      'group',
      'p-2',
      'font-medium',
      'text-sm',
      'dark:text-mineshaft-300',
      'dark:hover:text-mineshaft-100',
    ],
    content: [],
    trigger: ['group', 'select-none'],
    viewport: [],
  },
  variants: {
    orientation: {
      vertical: {
        wrapper: ['h-full', 'flex-col', 'p-4', 'border-r'],
        segment: ['flex-col'],
      },
      horizontal: {
        wrapper: ['w-full', 'flex-row', 'items-center', 'px-4', 'md:px-6', 'border-b'],
        link: ['px-6'],
      },
    },
    position: {
      sticky: {
        root: ['top-0', 'right-0', 'left-0', 'sticky'],
      },
      static: {
        root: ['static'],
      },
      floating: {
        root: ['top-0', 'right-0', 'left-0', 'sticky'],
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
        link: ['rounded-md', 'hover:bg-gray-100', 'dark:hover:bg-bunker-800'],
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
