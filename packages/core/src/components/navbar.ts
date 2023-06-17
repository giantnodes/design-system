import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const navbar = tv({
  slots: {
    base: ['relative', 'flex', 'flex-row', 'w-full', 'z-50'],
    container: [
      'relative',
      'flex',
      'flex-nowrap',
      'justify-between',
      'items-center',
      'w-full',
      'gap-x-6',
      'px-6',
      'bg-white',
      'border-b',
      'border-solid',
      'border-gray-200',
      'dark:bg-bunker',
      'dark:border-mineshaft-500',
    ],
    brand: ['flex', 'flex-nowrap', 'flex-row', 'justify-start', 'items-center', 'shrink-0', 'h-full'],
    content: ['relative', 'flex', 'flex-grow', 'items-center', 'justify-between', 'h-full'],
    segment: ['flex', 'items-center', 'h-full', 'gap-6'],
    item: [
      'flex',
      'items-center',
      'list-none',
      'cursor-pointer',
      'px-6',
      'text-sm',
      'font-medium',
      'leading-6',
      'dark:text-mineshaft-300',
      'dark:hover:text-mineshaft-100',
    ],
  },
  variants: {
    blurred: {
      true: {
        container: 'bg-opacity-70 backdrop-filter backdrop-blur-lg',
      },
    },
    position: {
      sticky: 'top-0 right-0 left-0 sticky',
      static: 'static',
      floating: {
        base: ['top-0', 'right-0', 'left-0', 'sticky'],
        container: ['mx-6', 'mt-6', 'rounded-xl', 'border'],
      },
    },
    size: {
      xs: {
        container: 'h-12',
      },
      sm: {
        container: 'h-14',
      },
      md: {
        container: 'h-16',
      },
      lg: {
        container: 'h-18',
      },
      xl: {
        container: 'h-20',
      },
    },
    variant: {
      none: {},
      highlight: {
        item: [
          'px-3',
          'py-2',
          'rounded-md',
          'duration-50',
          'transition-all',
          'hover:bg-gray-100',
          'dark:hover:bg-bunker-800',
        ],
      },
      underline: {
        item: [
          'h-full',
          'border-b-2',
          'border-transparent',
          'border-primary',
          'duration-50',
          'transition-all',
          'bordered',
          'hover:border-gray-200',
          'dark:hover:border-bunker-800',
        ],
      },
    },
  },
  defaultVariants: {
    position: 'sticky',
    size: 'md',
    variant: 'underline',
  },
})

export type NavbarVariantProps = VariantProps<typeof navbar>
