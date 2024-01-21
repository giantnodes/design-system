import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const form = tv({
  slots: {
    form: [],
    group: ['group', 'flex flex-col gap-1', 'w-full'],
    label: ['text-sm', 'font-medium', 'dark:text-white'],
    caption: ['text-xs'],
    feedback: ['text-xs'],
  },
  variants: {
    status: {
      neutral: {
        feedback: ['text-shark-500'],
      },
      brand: {
        feedback: ['text-brand-500'],
      },
      success: {
        feedback: ['text-green-500'],
      },
      info: {
        feedback: ['text-blue-500'],
      },
      warning: {
        feedback: ['text-yellow-500'],
      },
      danger: {
        feedback: ['text-red-500'],
      },
    },
  },
  defaultVariants: {
    status: 'neutral',
  },
})

export type FormVariantProps = VariantProps<typeof form>
