import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

const sidebar = tv({
  slots: {
    base: ['relative', 'flex', 'flex-col'],
    container: [
      'relative',
      'flex',
      'flex-col',
      'flex-nowrap',
      'justify-between',
      'items-center',
      'gap-12',
      'h-full',
      'overflow-hidden',
      'px-2',
      'py-6',
      'bg-white',
      'border-r',
      'border-gray-200',
      'dark:bg-bunker',
      'dark:border-mineshaft-500',
    ],
    brand: ['flex', 'flex-nowrap', 'flex-col', 'justify-start', 'items-center', 'shrink-0', 'h-full'],
    content: ['relative', 'flex', 'flex-col', 'w-full', 'gap-2'],
    item: [
      'flex',
      'flex-row',
      'items-center',
      'gap-4',
      'rounded',
      'cursor-pointer',
      'px-2',
      'h-10',
      'lg:text-sm',
      'lg:leading-6',
      'transition-all',
      'duration-50',
      'dark:text-bunker-100',
      'hover:bg-gray-100',
      'dark:hover:bg-bunker-700',
      'hover:!text-primary',
    ],
  },
  variants: {
    align: {
      left: {
        item: 'justify-start',
      },
      center: {
        item: 'justify-center',
      },
      right: {
        item: 'justify-end',
      },
    },
    position: {
      sticky: 'top-0 right-0 left-0 sticky',
      static: 'static',
      floating: {
        base: ['top-0', 'right-0', 'left-0', 'sticky'],
        container: ['m-6', 'rounded-xl', 'border'],
      },
    },
    size: {
      xs: {
        container: 'w-16',
        item: 'px-0',
      },
      sm: {
        container: 'w-32',
      },
      md: {
        container: 'w-64',
      },
      lg: {
        container: 'w-72',
      },
      xl: {
        container: 'w-96',
      },
    },
  },
  defaultVariants: {
    align: 'left',
    position: 'sticky',
    size: 'md',
  },
})

export type SidebarVariantProps = VariantProps<typeof sidebar>
export default sidebar
