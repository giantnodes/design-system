import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

const badge = tv({
  slots: {
    base: ['inline-flex', 'items-center', 'gap-1.5', 'font-medium'],
  },
  variants: {
    color: {
      neutral: {
        base: ['bg-gray-50', 'text-gray-600', 'ring-gray-500/10'],
      },
      success: {
        base: ['bg-green-50', 'text-green-700', 'ring-green-600/10'],
      },
      info: {
        base: ['bg-blue-50', 'text-blue-700', 'ring-blue-700/10'],
      },
      warning: {
        base: ['bg-yellow-50', 'text-yellow-800', 'ring-yellow-600/10'],
      },
      danger: {
        base: ['bg-red-50', 'text-red-700', 'ring-red-600/10'],
      },
    },
    radius: {
      none: {
        base: ['rounded-none'],
      },
      sm: {
        base: ['rounded-sm'],
      },
      md: {
        base: ['rounded-md'],
      },
      lg: {
        base: ['rounded-lg'],
      },
      full: {
        base: ['rounded-full'],
      },
    },
    size: {
      sm: {
        base: ['px-1.5', 'py-0.5', 'text-xs'],
      },
      md: {
        base: ['px-2', 'py-1', 'text-xs'],
      },
    },
    variant: {
      flat: {
        base: '',
      },
      bordered: {
        base: ['ring-1', 'ring-inset'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
    radius: 'md',
    size: 'md',
    variant: 'bordered',
  },
})

export type BadgeVariantProps = VariantProps<typeof badge>
export default badge
