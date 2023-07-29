import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const table = tv({
  slots: {
    base: ['overflow-auto'],
    table: ['table-auto', 'min-w-full', 'divide-y', 'divide-foreground'],
    thead: [],
    tbody: ['divide-y', 'divide-foreground'],
    tr: [],
    th: ['text-left', 'text-sm', 'font-semibold', 'text-title'],
    td: ['whitespace-nowrap', 'text-sm', 'text-subtitle'],
  },
  variants: {
    size: {
      sm: {
        th: ['px-2', 'py-2.5'],
        td: ['px-2', 'py-2'],
      },
      md: {
        th: ['px-3', 'py-3.5'],
        td: ['px-3', 'py-3'],
      },
      lg: {
        th: ['px-4', 'py-4.5'],
        td: ['px-4', 'py-4'],
      },
    },
    sticky: {
      true: {
        table: ['border-separate', 'border-spacing-0'],
        th: [
          'sticky',
          'top-0',
          'bg-opacity-75',
          'backdrop-blur',
          'backdrop-filter',
          'border-b',
          'border-foreground',
          'z-10',
        ],
        td: ['border-b', 'border-foreground'],
      },
    },
    striped: {
      true: {
        tbody: ['divide-y-0'],
        tr: ['odd:bg-transparent', 'even:bg-middleground'],
      },
      false: {
        th: ['first:pl-0', 'last:pr-0'],
        td: ['first:pl-0', 'last:pr-0'],
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
