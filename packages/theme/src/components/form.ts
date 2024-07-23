import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const form = tv({
  slots: {
    form: [],
    group: ['group', 'flex flex-col gap-1', 'w-full'],
    label: ['text-sm'],
    legend: ['w-full', 'mb-1'],
    fieldset: ['flex flex-row gap-2', 'text-sm'],
    caption: ['text-xs', 'text-subtitle'],
    feedback: ['text-xs'],
  },
  variants: {
    color: {
      neutral: {
        label: ['text-title'],
        fieldset: ['text-title'],
        feedback: ['text-content'],
      },
      brand: {
        label: ['text-brand'],
        fieldset: ['text-brand'],
        feedback: ['text-brand'],
      },
      success: {
        label: ['text-success'],
        fieldset: ['text-success'],
        feedback: ['text-success'],
      },
      info: {
        label: ['text-info'],
        fieldset: ['text-info'],
        feedback: ['text-info'],
      },
      warning: {
        label: ['text-warning'],
        fieldset: ['text-warning'],
        feedback: ['text-warning'],
      },
      danger: {
        label: ['text-danger'],
        fieldset: ['text-danger'],
        feedback: ['text-danger'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
})

export type FormVariantProps = VariantProps<typeof form>
