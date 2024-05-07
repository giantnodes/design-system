import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const navigation = tv({
  slots: {
    navigation: ['relative', 'flex', 'text-sm text-content', 'z-10'],
    wrapper: ['relative', 'flex gap-4 md:gap-6', 'bg-middleground', 'border-solid border-partition', 'z-10'],
    brand: ['flex flex-row justify-center flex-nowrap shrink-0'],
    segment: ['flex gap-2', 'list-none'],
    title: ['font-semibold'],
    item: ['flex grow', 'select-none'],
    link: [
      'flex items-center gap-x-3 grow',
      'p-2',
      'select-none',
      'transition-all duration-200',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1 focus:outline-partition',
      '[&_svg]:hover:text-brand',
    ],
    divider: ['bg-partition', 'border-partition'],
    trigger: ['flex items-center'],
  },
  variants: {
    orientation: {
      horizontal: {
        wrapper: ['flex-row items-center', 'border-b', 'w-full', 'px-4 md:px-6'],
        segment: ['items-center'],
        link: ['px-6'],
        divider: ['h-full', 'w-px', 'mx-2'],
      },
      vertical: {
        wrapper: ['flex-col', 'h-full', 'border-r', 'p-4'],
        segment: ['flex-col'],
        divider: ['h-px', 'w-full', 'my-2'],
      },
    },
    position: {
      sticky: {
        navigation: ['sticky', 'top-0 right-0 left-0'],
      },
      static: {
        navigation: ['static'],
      },
      floating: {
        navigation: ['sticky', 'top-0 right-0 left-0'],
        wrapper: ['rounded-xl', 'border', 'mx-6', 'mt-6'],
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
        link: ['rounded-md', 'hover:bg-foreground'],
      },
    },
    isSelected: {
      true: {
        link: ['bg-foreground', 'font-semibold', '[&_svg]:text-brand'],
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
