import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const button = tv({
  slots: {
    base: [
      'inline-flex',
      'iems-center',
      'justify-center',
      'items-center',
      'space-x-2',
      'gap-x-1',
      'text-center',
      'font-regular',
      'transition-all',
      'outline-none',
      'focus:outline-2',
      'focus:outline-offset-1',
      'shadow-sm',
      'rounded',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    ],
  },
  variants: {
    color: {
      brand: {
        base: [
          'text-white',
          'bg-brand-500',
          'hover:bg-brand-600',
          'disabled:bg-brand-200',
          'disabled:text-brand-700',
          'focus:outline-brand-700',
          'dark:text-brand-950',
          'dark:bg-brand-400',
          'hover:dark:bg-brand-300',
          'disabled:dark:bg-brand-800',
          'disabled:dark:text-brand-100',
          'focus:dark:outline-brand-300',
        ],
      },
      success: {
        base: [
          'text-white',
          'bg-green-500',
          'hover:bg-green-600',
          'disabled:bg-green-200',
          'disabled:text-green-700',
          'focus:outline-green-700',
          'dark:text-green-950',
          'dark:bg-green-400',
          'hover:dark:bg-green-300',
          'disabled:dark:bg-green-800',
          'disabled:dark:text-green-100',
          'focus:dark:outline-green-300',
        ],
      },
      info: {
        base: [
          'text-white',
          'bg-blue-500',
          'hover:bg-blue-600',
          'disabled:bg-blue-200',
          'disabled:text-blue-700',
          'focus:outline-blue-700',
          'dark:text-blue-950',
          'dark:bg-blue-400',
          'hover:dark:bg-blue-300',
          'disabled:dark:bg-blue-800',
          'disabled:dark:text-blue-100',
          'focus:dark:outline-blue-300',
        ],
      },
      warning: {
        base: [
          'text-white',
          'bg-yellow-500',
          'hover:bg-yellow-600',
          'disabled:bg-yellow-200',
          'disabled:text-yellow-700',
          'focus:outline-yellow-700',
          'dark:text-yellow-950',
          'dark:bg-yellow-400',
          'hover:dark:bg-yellow-300',
          'disabled:dark:bg-yellow-800',
          'disabled:dark:text-yellow-100',
          'focus:dark:outline-yellow-300',
        ],
      },
      danger: {
        base: [
          'text-white',
          'bg-red-500',
          'hover:bg-red-600',
          'disabled:bg-red-200',
          'disabled:text-red-700',
          'focus:outline-red-700',
          'dark:text-red-950',
          'dark:bg-red-400',
          'hover:dark:bg-red-300',
          'disabled:dark:bg-red-800',
          'disabled:dark:text-red-100',
          'focus:dark:outline-red-300',
        ],
      },
    },
    shape: {
      pill: {
        base: ['rounded-full'],
      },
    },
    size: {
      xs: {
        base: ['text-xs', 'px-2.5', 'py-1'],
      },
      sm: {
        base: ['text-sm', 'leading-4', 'px-3', 'py-2'],
      },
      md: {
        base: ['text-sm', 'px-4', 'py-2'],
      },
      lg: {
        base: ['text-base', 'px-4', 'py-2'],
      },
      xl: {
        base: ['text-base', 'px-6', 'py-3'],
      },
    },
    variant: {
      dashed: {
        base: ['border', 'border-dashed', '!bg-transparent'],
      },
      outlined: {
        base: ['border', '!bg-transparent'],
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      color: 'brand',
      class: {
        base: [
          'border-brand-700',
          'text-brand-700',
          'dark:text-brand-300',
          'dark:border-brand-300',
          'hover:dark:bg-brand-950',
        ],
      },
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        base: [
          'border-green-700',
          'text-green-700',
          'dark:text-green-300',
          'dark:border-green-300',
          'hover:dark:bg-green-950',
        ],
      },
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        base: [
          'border-blue-700',
          'text-blue-700',
          'dark:text-blue-300',
          'dark:border-blue-300',
          'hover:dark:bg-blue-950',
        ],
      },
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        base: [
          'border-yellow-700',
          'text-yellow-700',
          'dark:text-yellow-300',
          'dark:border-yellow-300',
          'hover:dark:bg-yellow-950',
        ],
      },
    },
    {
      variant: 'outlined',
      color: 'danger',
      class: {
        base: ['border-red-700', 'text-red-700', 'dark:text-red-300', 'dark:border-red-300', 'hover:dark:bg-red-950'],
      },
    },
    {
      variant: 'dashed',
      color: 'brand',
      class: {
        base: [
          'border-brand-700',
          'text-brand-700',
          'dark:text-brand-300',
          'dark:border-brand-300',
          'hover:dark:bg-brand-950',
        ],
      },
    },
    {
      variant: 'dashed',
      color: 'success',
      class: {
        base: [
          'border-green-700',
          'text-green-700',
          'dark:text-green-300',
          'dark:border-green-300',
          'hover:dark:bg-green-950',
        ],
      },
    },
    {
      variant: 'dashed',
      color: 'info',
      class: {
        base: [
          'border-blue-700',
          'text-blue-700',
          'dark:text-blue-300',
          'dark:border-blue-300',
          'hover:dark:bg-blue-950',
        ],
      },
    },
    {
      variant: 'dashed',
      color: 'warning',
      class: {
        base: [
          'border-yellow-700',
          'text-yellow-700',
          'dark:text-yellow-300',
          'dark:border-yellow-300',
          'hover:dark:bg-yellow-950',
        ],
      },
    },
    {
      variant: 'dashed',
      color: 'danger',
      class: {
        base: ['border-red-700', 'text-red-700', 'dark:text-red-300', 'dark:border-red-300', 'hover:dark:bg-red-950'],
      },
    },
  ],
  defaultVariants: {
    color: 'brand',
    size: 'md',
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
