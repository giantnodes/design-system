import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const breadcrumb = tv({
  slots: {
    base: ['flex flex-wrap', 'list-none'],
    item: [
      'group',
      'flex items-center',
      'text-inherit',
      'has-[:current]:opacity-80',
      'has-[:disabled]:opacity-50 has-[:disabled]:pointer-events-none',
    ],
    separator: ['group-last:hidden', 'text-subtitle', 'px-1'],
  },
  variants: {
    size: {
      xs: {
        item: 'text-xs',
      },
      sm: {
        item: 'text-sm',
      },
      md: {
        item: 'text-base',
      },
      lg: {
        item: 'text-lg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type BreadcrumbVariantProps = VariantProps<typeof breadcrumb>
