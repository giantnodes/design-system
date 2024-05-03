import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const alert = tv({
  slots: {
    alert: ['flex flex-row gap-x-2', 'rounded-lg', 'border', 'p-4'],
    body: ['flex flex-col gap-y-2 grow'],
    heading: ['text-sm', 'font-medium'],
    list: ['pl-5', 'list-disc'],
    item: ['text-sm'],
  },
  variants: {
    color: {
      neutral: {
        alert: ['bg-middleground', 'text-content', 'border-partition'],
        heading: ['text-title'],
      },
      brand: {
        alert: ['bg-brand-50', 'text-brand-700', 'border-brand-400'],
        heading: ['text-brand-800'],
      },
      success: {
        alert: ['bg-success-50', 'text-success-700', 'border-success-400'],
        heading: ['text-success-800'],
      },
      info: {
        alert: ['bg-info-50', 'text-info-700', 'border-info-400'],
        heading: ['text-info-800'],
      },
      warning: {
        alert: ['bg-warning-50', 'text-warning-700', 'border-warning-400'],
        heading: ['text-warning-800'],
      },
      danger: {
        alert: ['bg-danger-50', 'text-danger-700', 'border-danger-400'],
        heading: ['text-danger-800'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
})

export type AlertVariantProps = VariantProps<typeof alert>
