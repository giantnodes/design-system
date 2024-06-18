import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const form = tv({
  slots: {
    form: [],
    group: ['group', 'flex flex-col gap-2', 'w-full'],
    label: ['text-sm', 'text-title'],
    caption: ['text-xs', 'text-subtitle'],
    feedback: ['text-xs'],
  },
  variants: {
    status: {
      neutral: {
        feedback: ['text-content'],
      },
      brand: {
        feedback: ['text-brand'],
      },
      success: {
        feedback: ['text-green'],
      },
      info: {
        feedback: ['text-blue'],
      },
      warning: {
        feedback: ['text-yellow'],
      },
      danger: {
        feedback: ['text-red'],
      },
    },
  },
  defaultVariants: {
    status: 'neutral',
  },
})

export type FormVariantProps = VariantProps<typeof form>
