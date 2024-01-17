import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const form = tv({
  slots: {
    form: [],
    group: ['w-full'],
    label: ['block', 'text-sm', 'font-medium', 'mb-2', 'dark:text-white'],
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
