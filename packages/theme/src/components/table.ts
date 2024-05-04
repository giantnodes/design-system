import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const table = tv({
  slots: {
    table: ['bg-middleground', 'table-auto', 'min-w-full', 'overflow-hidden'],
    thead: [],
    tbody: ['divide-y divide-partition'],
    tr: ['outline-none'],
    th: ['bg-background', 'text-title text-left font-medium', 'outline-none', 'whitespace-nowrap'],
    td: ['text-content', 'whitespace-normal', 'outline-none'],
  },
  variants: {
    size: {
      sm: {
        th: ['text-sm', 'px-2', 'py-3'],
        td: ['text-sm', 'p-2'],
      },
      md: {
        th: ['text-base', 'px-3', 'py-4'],
        td: ['text-base', 'p-3'],
      },
      lg: {
        th: ['text-lg', 'px-4 py-5'],
        td: ['text-lg', 'p-4'],
      },
    },
    sticky: {
      true: {
        th: ['sticky top-0', 'bg-opacity-75', 'backdrop-blur backdrop-filter', 'border-b border-partition', 'z-10'],
      },
    },
    striped: {
      true: {
        tbody: ['divide-y-0'],
        tr: ['odd:bg-foreground', 'even:bg-middleground'],
      },
    },
    headingless: {
      true: {
        thead: ['hidden'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    sticky: false,
    striped: false,
  },
})

export type TableVariantProps = VariantProps<typeof table>
