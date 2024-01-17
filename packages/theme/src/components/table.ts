import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const table = tv({
  slots: {
    base: ['overflow-auto'],
    table: ['table-auto', 'min-w-full', 'divide-shark-100 dark:divide-shark-500'],
    thead: [],
    tbody: ['divide-y', 'divide-shark-100 dark:divide-shark-500'],
    tr: ['group', 'outline-none'],
    th: [
      'text-left',
      'text-sm',
      'font-semibold',
      'group',
      'outline-none',
      'whitespace-nowrap',
      'text-shark-600 dark:text-shark-50',
      'bg-white dark:bg-shark-950',
      'first:rounded-l-md last:rounded-r-md',
    ],
    td: ['outline-none', 'whitespace-normal', 'text-sm', 'text-shark-400 dark:text-shark-200', 'px-2', 'py-2'],
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
          'divide-shark-100 dark:divide-shark-500',
          'z-10',
        ],
        td: ['border-b', 'border-shark-100 dark:border-shark-500'],
      },
    },
    striped: {
      true: {
        tbody: ['divide-y-0'],
        tr: ['odd:bg-transparent', 'even:bg-shark-100 even:dark:bg-shark-500'],
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
