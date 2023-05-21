import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

const navbar = tv({
  slots: {
    base: ['relative', 'flex', 'flex-row', 'w-full', 'z-50'],
    container: [
      'relative',
      'flex',
      'flex-nowrap',
      'justify-between',
      'items-center',
      'w-full',
      'px-6',
      'bg-white',
      'border-b',
      'border-solid',
      'border-gray-200',
    ],
    brand: ['flex', 'flex-nowrap', 'flex-row', 'justify-start', 'items-center', 'shrink-0', 'h-full'],
    content: ['flex', 'items-center', 'h-full', 'gap-6'],
    item: ['relative', 'flex', 'items-center', 'list-none', 'cursor-pointer', 'px-6'],
  },
  variants: {
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
    blurred: {
      true: {
        container: 'bg-opacity-70 backdrop-filter backdrop-blur-lg',
      },
    },
  },
  defaultVariants: {
    position: 'sticky',
    size: 'md',
  },
})

export type NavbarVariantProps = VariantProps<typeof navbar>
export default navbar
