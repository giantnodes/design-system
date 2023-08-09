import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const table = tv({
  slots: {
    base: ['overflow-auto'],
    table: ['table-auto', 'min-w-full', 'divide-y', 'dark:divide-shark-500'],
    thead: [],
    tbody: ['divide-y', 'dark:divide-shark-500'],
    tr: [],
    th: ['text-left', 'text-sm', 'font-semibold', 'text-shark-50'],
    td: ['whitespace-nowrap', 'text-sm', 'text-shark-200'],
  },
  variants: {
    size: {
      sm: {
        th: ['px-2', 'py-3'],
        td: ['px-2', 'py-2'],
      },
      md: {
        th: ['px-3', 'py-4'],
        td: ['px-3', 'py-3'],
      },
      lg: {
        th: ['px-4', 'py-5'],
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
          'z-10',
          'dark:divide-shark-500',
        ],
        td: ['border-b', 'dark:border-shark-500'],
      },
    },
    striped: {
      true: {
        tbody: ['divide-y-0'],
        tr: ['odd:bg-transparent', 'even:dark:bg-shark-500'],
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
