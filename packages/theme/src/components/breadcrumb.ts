import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const breadcrumb = tv({
  slots: {
    base: ['flex', 'flex-wrap', 'list-none'],
    item: ['flex', 'items-center', 'cursor-pointer', 'text-shark-600', 'dark:text-shark-50'],
    separator: ['text-shark', 'px-1', 'cursor-default'],
  },
  variants: {
    size: {
      sm: {
        item: 'text-xs',
      },
      md: {
        item: 'text-sm',
      },
      lg: {
        item: 'text-md',
      },
    },
    active: {
      true: {
        item: 'cursor-default',
      },
      false: {
        item: 'opacity-80',
      },
    },
    disabled: {
      true: {
        item: '!pointer-events-none',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type BreadcrumbVariantProps = VariantProps<typeof breadcrumb>
