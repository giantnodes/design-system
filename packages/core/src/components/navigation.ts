import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const navigation = tv({
  slots: {
    base: ['relative', 'flex', 'z-50'],
    wrapper: ['relative', 'flex', 'gap-4', 'md:gap-6', 'z-50', 'bg-background', 'border-solid', 'border-foreground'],
    brand: ['flex', 'flex-nowrap', 'flex-row', 'justify-center', 'shrink-0'],
    segment: ['list-none', 'flex', 'gap-1'],
    title: ['px-2', 'mb-2', 'leading-6', 'text-xs', 'text-title', 'font-semibold'],
    item: ['select-none'],
    link: [
      'flex',
      'items-center',
      'gap-x-3',
      'group',
      'p-2',
      'text-sm',
      'text-title',
      'hover:text-title',
      '[&_svg]:text-subtitle',
      '[&_svg]:hover:text-primary',
    ],
    content: [],
    trigger: ['flex', 'items-center'],
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
        link: ['rounded-md', 'hover:bg-middleground'],
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
