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
        input: ['dark:border-shark-500'],
      },
      brand: {
        input: ['border-brand-500'],
      },
      success: {
        input: ['border-green-500'],
        feedback: ['text-green-500'],
      },
      info: {
        input: ['border-blue-500'],
        feedback: ['text-blue-500'],
      },
      warning: {
        input: ['border-yellow-600'],
        feedback: ['text-yellow-500'],
      },
      danger: {
        input: ['border-red-500'],
        feedback: ['text-red-500'],
      },
    },
  },
  defaultVariants: {
    status: 'neutral',
  },
})

export type FormVariantProps = VariantProps<typeof form>
