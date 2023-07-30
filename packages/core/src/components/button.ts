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
    ],
  },
  variants: {
    color: {
      primary: {
        base: [
          'text-white',
          'bg-primary-500',
          'hover:bg-primary-600',
          'disabled:bg-primary-200',
          'disabled:text-primary-700',
          'focus:outline-primary-700',
          'dark:text-primary-950',
          'dark:bg-primary-400',
          'hover:dark:bg-primary-300',
          'disabled:dark:bg-primary-800',
          'disabled:dark:text-primary-100',
          'focus:dark:outline-primary-300',
        ],
      },
      secondary: {
        base: [
          'text-white',
          'bg-secondary-500',
          'hover:bg-secondary-600',
          'disabled:bg-secondary-200',
          'disabled:text-secondary-700',
          'focus:outline-secondary-700',
          'dark:text-secondary-950',
          'dark:bg-secondary-400',
          'hover:dark:bg-secondary-300',
          'disabled:dark:bg-secondary-800',
          'disabled:dark:text-secondary-100',
          'focus:dark:outline-secondary-300',
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
      color: 'primary',
      class: {
        base: [
          'border-primary-700',
          'text-primary-700',
          'dark:text-primary-300',
          'dark:border-primary-300',
          'hover:dark:bg-primary-950',
        ],
      },
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        base: [
          'border-secondary-700',
          'text-secondary-700',
          'dark:text-secondary-300',
          'dark:border-secondary-300',
          'hover:dark:bg-secondary-950',
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
      color: 'primary',
      class: {
        base: [
          'border-primary-700',
          'text-primary-700',
          'dark:text-primary-300',
          'dark:border-primary-300',
          'hover:dark:bg-primary-950',
        ],
      },
    },
    {
      variant: 'dashed',
      color: 'secondary',
      class: {
        base: [
          'border-secondary-700',
          'text-secondary-700',
          'dark:text-secondary-300',
          'dark:border-secondary-300',
          'hover:dark:bg-secondary-950',
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
    color: 'primary',
    size: 'md',
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
