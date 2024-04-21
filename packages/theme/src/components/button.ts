import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const button = tv({
  slots: {
    button: [
      'inline-flex',
      'items-center',
      'justify-center',
      'gap-2',
      'text-center',
      'rounded-md',
      'border',
      'transition-all ease-out duration-200',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    ],
  },
  variants: {
    color: {
      neutral: {
        button: [
          'text-white',
          'bg-shark-400/10 hover:bg-shark-200/10',
          'border-shark-200/30',
          'focus:outline-shark-200/30',
        ],
      },
      brand: {
        button: ['text-white', 'bg-brand-800 hover:bg-brand-800/80', 'border-brand-600', 'focus:outline-brand-600'],
      },
      success: {
        button: [
          'text-white',
          'dark:border-green-600',
          'dark:bg-green-800',
          'focus:dark:outline-green-300',
          'hover:dark:bg-green-800/80',
          'focus:dark:outline-green-600',
        ],
      },
      info: {
        button: [
          'text-white',
          'dark:border-blue-600',
          'dark:bg-blue-800',
          'focus:dark:outline-blue-300',
          'hover:dark:bg-blue-800/80',
          'focus:dark:outline-blue-600',
        ],
      },
      warning: {
        button: [
          'text-white',
          'dark:border-yellow-600',
          'dark:bg-yellow-800',
          'focus:dark:outline-yellow-300',
          'hover:dark:bg-yellow-800/80',
          'focus:dark:outline-yellow-600',
        ],
      },
      danger: {
        button: ['text-red-500', 'bg-red-800/10 hover:bg-red-500/10', 'border-red-500/30', 'focus:outline-red-500/30'],
      },
      transparent: {
        button: ['text-white', 'bg-transparent', 'border-transparent', 'focus:outline-shark-200/30'],
      },
    },
    shape: {
      pill: {
        button: ['rounded-full'],
      },
    },
    size: {
      xs: {
        button: ['text-xs', 'px-2.5', 'py-1'],
      },
      sm: {
        button: ['text-sm', 'leading-4', 'px-3', 'py-2'],
      },
      md: {
        button: ['text-sm', 'px-4', 'py-2'],
      },
      lg: {
        button: ['text-base', 'px-4', 'py-2'],
      },
      xl: {
        button: ['text-base', 'px-6', 'py-3'],
      },
    },
    variant: {
      dashed: {
        button: ['border', 'border-dashed', '!bg-transparent'],
      },
      outlined: {
        button: ['border', '!bg-transparent'],
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outlined',
      color: 'brand',
      class: {
        button: [
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
        button: [
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
        button: [
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
        button: [
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
        button: ['border-red-700', 'text-red-700', 'dark:text-red-300', 'dark:border-red-300', 'hover:dark:bg-red-950'],
      },
    },
    {
      variant: 'dashed',
      color: 'brand',
      class: {
        button: [
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
        button: [
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
        button: [
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
        button: [
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
        button: ['border-red-700', 'text-red-700', 'dark:text-red-300', 'dark:border-red-300', 'hover:dark:bg-red-950'],
      },
    },
  ],
  defaultVariants: {
    color: 'brand',
    size: 'md',
  },
})

export type ButtonVariantProps = VariantProps<typeof button>
