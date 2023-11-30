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
      'border-solid',
      'dark:bg-shark-800',
      'dark:border-shark-500',
    ],
    brand: ['flex', 'flex-nowrap', 'flex-row', 'justify-center', 'shrink-0'],
    segment: ['list-none', 'flex', 'gap-2'],
    title: ['px-2', 'mb-2', 'text-xs', 'font-semibold', 'text-shark-600', 'dark:text-shark-50'],
    item: ['select-none', 'grow'],
    link: [
      'flex',
      'items-center',
      'gap-x-3',
      'group',
      'p-2',
      'text-sm',
      'text-shark-400',
      'dark:text-shark-200',
      'hover:text-shark-600',
      'hover:dark:text-shark-50',
      '[&_svg]:hover:text-brand-500',
    ],
    content: [],
    divider: ['bg-shark-100', 'border-shark-100', 'dark:bg-shark-500', 'dark:border-shark-500'],
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
        link: ['rounded-md', 'hover:bg-shark-50', 'hover:dark:bg-shark-600'],
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
