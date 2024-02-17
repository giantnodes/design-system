import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const select = tv({
  slots: {
    select: [
      'flex flex-col items-start',
      'w-full',
      'rounded-md',
      'cursor-pointer',
      'text-shark-400 dark:text-shark-200',
      'has-[:disabled]:opacity-50',
    ],
    placeholder: ['text-shark-400 dark:text-shark-200'],
    button: ['flex flex-row items-center justify-between', 'w-full', 'p-1.5', 'focus:outline-none'],
    icon: [],
    popover: ['rounded-md', 'dark:bg-shark-700', 'w-[--trigger-width]'],
    list: ['relative', 'flex flex-col gap-1', 'w-full', 'p-1', 'focus:outline-none'],
    option: [
      'group',
      'flex tems-center',
      'px-2 py-1',
      'rounded-md',
      'cursor-pointer',
      'text-shark-400 dark:text-shark-100',
      'focus:outline-none',
      'hover:bg-shark-50 hover:dark:bg-shark-800',
    ],
  },
  variants: {
    size: {
      sm: {
        select: ['text-xs'],
        option: ['text-xs'],
      },
      md: {
        select: ['text-sm'],
        option: ['text-sm'],
      },
      lg: {
        select: ['text-md'],
        option: ['text-md'],
      },
    },
    status: {
      neutral: {
        select: ['dark:border-shark-500'],
      },
      brand: {
        select: ['border-brand-500'],
      },
      success: {
        select: ['border-green-500'],
      },
      info: {
        select: ['border-blue-500'],
      },
      warning: {
        select: ['border-yellow-600'],
      },
      danger: {
        select: ['border-red-500'],
      },
    },
    variant: {
      outlined: {
        select: ['border', 'border-solid'],
      },
    },
    transparent: {
      false: {
        select: ['dark:bg-shark-700'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'neutral',
    variant: 'outlined',
    transparent: false,
  },
})

export type SelectVariantProps = VariantProps<typeof select>
