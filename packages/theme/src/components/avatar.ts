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
      'dark:border-shark-500',
    ],
    img: ['inline-block', 'size-full', 'rounded-[inherit]'],
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
        base: ['size-6', 'text-xs'],
        notification: ['size-2'],
      },
      sm: {
        base: ['size-8', 'text-sm'],
        notification: ['size-2.5'],
      },
      md: {
        base: ['size-10'],
        notification: ['size-3'],
      },
      lg: {
        base: ['size-12', 'text-lg'],
        notification: ['size-3.5'],
      },
      xl: {
        base: ['size-16', 'text-xl'],
        notification: ['size-4'],
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
