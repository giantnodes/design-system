import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const alert = tv({
  slots: {
    base: ['flex', 'flex-row,', 'gap-x-2', 'border', 'p-4', 'rounded-lg'],
    body: ['flex', 'flex-col', 'gap-y-2'],
    heading: ['text-sm', 'font-medium'],
    text: ['text-sm'],
    list: ['pl-5', 'list-disc'],
    item: ['text-sm'],
  },
  variants: {
    color: {
      neutral: {
        base: [
          'bg-shark-50',
          'text-shark-700',
          'border-shark-500',
          'dark:bg-shark-900',
          'dark:text-shark-50',
          'dark:border-shark-600',
        ],
        heading: ['dark:text-shark-100'],
      },
      brand: {
        base: [
          'bg-brand-50',
          'text-brand-700',
          'border-brand-400',
          'dark:bg-brand-900',
          'dark:text-brand-50',
          'dark:border-brand-600',
        ],
        heading: ['text-brand-800', 'dark:text-brand-100'],
      },
      success: {
        base: [
          'bg-green-50',
          'text-green-700',
          'border-green-400',
          'dark:bg-green-900',
          'dark:text-green-50',
          'dark:border-green-600',
        ],
        heading: ['text-green-800', 'dark:text-green-100'],
      },
      info: {
        base: [
          'bg-blue-50',
          'text-blue-700',
          'border-blue-400',
          'dark:bg-blue-900',
          'dark:text-blue-50',
          'dark:border-blue-600',
        ],
        heading: ['text-blue-800', 'dark:text-blue-100'],
      },
      warning: {
        base: [
          'bg-yellow-50',
          'text-yellow-700',
          'border-yellow-400',
          'dark:bg-yellow-900',
          'dark:text-yellow-50',
          'dark:border-yellow-600',
        ],
        heading: ['text-yellow-800', 'dark:text-yellow-100'],
      },
      danger: {
        base: [
          'bg-red-50',
          'text-red-700',
          'border-red-400',
          'dark:bg-red-900',
          'dark:text-red-50',
          'dark:border-red-600',
        ],
        heading: ['text-red-800', 'dark:text-red-100'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
})

export type AlertVariantProps = VariantProps<typeof alert>
