import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const avatar = tv({
  slots: {
    group: ['isolate', 'flex', '-space-x-2'],
    avatar: [
      'relative',
      'inline-flex items-center justify-center shrink-0',
      'bg-middleground',
      'text-content',
      'leading-none',
      'border border-transparent',
      'bg-foreground',
    ],
    img: ['inline-block', 'size-full', 'rounded-[inherit]'],
    icon: ['flex items-center justify-center', 'text-inherit', 'rounded-[inherit]', 'overflow-hidden'],
    notification: ['absolute', 'block', 'rounded-full', 'top-0 right-0'],
  },
  variants: {
    color: {
      none: {
        avatar: ['bg-transparent', 'border-transparent'],
        notification: ['bg-transparent'],
      },
      neutral: {
        avatar: ['border-partition'],
        notification: ['bg-partition'],
      },
      brand: {
        avatar: ['border-brand-500'],
        notification: ['bg-brand-500'],
      },
      success: {
        avatar: ['border-success-500'],
        notification: ['bg-success-500'],
      },
      info: {
        avatar: ['border-info-500'],
        notification: ['bg-info-500'],
      },
      warning: {
        avatar: ['border-warning-500'],
        notification: ['bg-warning-500'],
      },
      danger: {
        avatar: ['border-danger-500'],
        notification: ['bg-danger-500'],
      },
    },
    radius: {
      none: {
        avatar: ['rounded-none'],
      },
      xs: {
        avatar: ['rounded-xs'],
      },
      sm: {
        avatar: ['rounded-sm'],
      },
      md: {
        avatar: ['rounded-md'],
      },
      lg: {
        avatar: ['rounded-lg'],
      },
      xl: {
        avatar: ['rounded-xl'],
      },
      full: {
        avatar: ['rounded-full'],
      },
    },
    size: {
      xs: {
        avatar: ['size-6', 'text-xs'],
        notification: ['size-1.5'],
      },
      sm: {
        avatar: ['size-8', 'text-sm'],
        notification: ['size-2'],
      },
      md: {
        avatar: ['size-10'],
        notification: ['size-2.5'],
      },
      lg: {
        avatar: ['size-12', 'text-lg'],
        notification: ['size-3'],
      },
      xl: {
        avatar: ['size-16', 'text-xl'],
        notification: ['size-3.5'],
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
    size: 'sm',
  },
})

export type AvatarVariantProps = VariantProps<typeof avatar>
