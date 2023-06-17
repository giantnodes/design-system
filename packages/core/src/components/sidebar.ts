import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const sidebar = tv({
  slots: {
    base: ['relative', 'flex', 'flex-col', 'h-full', 'z-50'],
    container: [
      'flex',
      'flex-grow',
      'flex-col',
      'overflow-y-auto',
      'gap-y-6',
      'p-4',
      'border-r',
      'border-gray-200',
      'bg-white',
      'dark:bg-bunker',
      'dark:border-mineshaft-500',
    ],
    brand: ['flex', 'flex-shrink-0', 'items-center'],
    content: ['flex', 'flex-grow', 'flex-col', 'gap-y-6'],
    segment: ['flex', 'flex-col', 'w-full', 'gap-y-1'],
    item: [
      'group',
      'flex',
      'items-center',
      'gap-x-3',
      'cursor-pointer',
      'p-2',
      'rounded-md',
      'text-sm',
      'font-medium',
      'leading-6',
      'text-gray-900',
      'duration-50',
      'transition-all',
      'hover:bg-gray-100',
      'dark:text-mineshaft-300',
      'dark:hover:text-mineshaft-100',
      'dark:hover:bg-bunker-800',
    ],
  },
  variants: {
    position: {
      sticky: 'top-0 right-0 left-0 sticky',
      static: 'static',
      floating: {
        base: ['top-0', 'right-0', 'left-0', 'sticky'],
        container: ['m-6', 'rounded-xl', 'border'],
      },
    },
    size: {
      sm: {
        container: 'w-20',
      },
      md: {
        container: 'w-64',
      },
      lg: {
        container: 'w-72',
      },
    },
  },
  defaultVariants: {
    position: 'sticky',
    size: 'md',
  },
})

export type SidebarVariantProps = VariantProps<typeof sidebar>
