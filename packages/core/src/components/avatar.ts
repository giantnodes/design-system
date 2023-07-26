import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const avatar = tv({
  slots: {
    group: ['isolate', 'flex', '-space-x-2'],
    base: [
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'leading-none',
      'font-medium',
      'border',
      'border-gray-200',
      'dark:border-mineshaft-500',
    ],
    img: ['inline-block', 'w-full', 'h-full', 'rounded-[inherit]'],
    icon: ['flex', 'items-center', 'justify-center', 'text-inherit'],
    notification: ['absolute', 'top-0', 'right-0', 'block', 'rounded-full'],
  },
  variants: {
    color: {
      neutral: {
        notification: ['bg-gray-200'],
      },
      success: {
        notification: ['bg-green-500'],
      },
      info: {
        notification: ['bg-blue-500'],
      },
      warning: {
        notification: ['bg-yellow-300'],
      },
      danger: {
        notification: ['bg-red-500'],
      },
    },
    radius: {
      none: {
        base: ['rounded-none'],
        notification: ['-translate-y-1/2', 'translate-x-1/2'],
      },
      sm: {
        base: ['rounded-sm'],
        notification: ['-translate-y-1/2', 'translate-x-1/2'],
      },
      md: {
        base: ['rounded-md'],
        notification: ['-translate-y-1/2', 'translate-x-1/2'],
      },
      lg: {
        base: ['rounded-lg'],
        notification: ['-translate-y-1/2', 'translate-x-1/2'],
      },
      xl: {
        base: ['rounded-xl'],
        notification: ['-translate-y-1/2', 'translate-x-1/2'],
      },
      full: {
        base: ['rounded-full'],
      },
    },
    size: {
      xs: {
        base: ['h-6', 'w-6', 'text-xs'],
        notification: ['h-2', 'w-2'],
      },
      sm: {
        base: ['w-8', 'h-8', 'text-sm'],
        notification: ['h-2.5', 'w-2.5'],
      },
      md: {
        base: ['h-10', 'w-10'],
        notification: ['h-3', 'w-3'],
      },
      lg: {
        base: ['w-12', 'h-12', 'text-lg'],
        notification: ['h-3.5', 'w-3.5'],
      },
      xl: {
        base: ['w-16', 'h-16', 'text-xl'],
        notification: ['h-4', 'w-4'],
      },
    },
    zoomed: {
      true: {
        img: ['hover:scale-125', 'ease-in', 'duration-200'],
        icon: ['hover:scale-125', 'ease-in', 'duration-200'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
    radius: 'full',
    size: 'md',
  },
})

export type AvatarVariantProps = VariantProps<typeof avatar>
