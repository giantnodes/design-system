import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

const avatar = tv({
  slots: {
    group: ['isolate', 'flex', '-space-x-2', 'overflow-hidden'],
    base: [
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'leading-none',
      'font-medium',
      'overflow-hidden',
      'ring-2',
      'ring-white',
    ],
    img: ['relative', 'inline-block', 'w-full', 'h-full'],
    icon: ['flex', 'items-center', 'justify-center', 'text-inherit'],
    notification: ['absolute', 'top-0', 'right-0', 'block', 'rounded-full', 'bg-green-400', 'ring-2', 'ring-white'],
  },
  variants: {
    size: {
      xs: {
        base: ['h-8', 'w-8', 'text-xs'],
        notification: ['h-2', 'w-2'],
      },
      sm: {
        base: ['w-10', 'h-10', 'text-sm'],
        notification: ['h-2.5', 'w-2.5'],
      },
      md: {
        base: ['h-12', 'w-12'],
        notification: ['h-3', 'w-3'],
      },
      lg: {
        base: ['w-14', 'h-14', 'text-lg'],
        notification: ['h-3.5', 'w-3.5'],
      },
      xl: {
        base: ['w-16', 'h-16', 'text-xl'],
        notification: ['h-4', 'w-4'],
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
    zoomed: {
      true: {
        img: ['hover:scale-125', 'ease-in', 'duration-200'],
        icon: ['hover:scale-125', 'ease-in', 'duration-200'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    radius: 'full',
    zoomed: false,
  },
})

export type AvatarVariantProps = VariantProps<typeof avatar>
export default avatar
