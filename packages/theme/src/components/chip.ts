import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const chip = tv({
  slots: {
    chip: ['inline-flex items-center gap-1.5', 'rounded-md', 'font-medium', 'border'],
  },
  variants: {
    color: {
      neutral: {
        chip: ['text-subtitle', 'bg-shark/20', 'border-partition'],
      },
      brand: {
        chip: ['text-brand', 'bg-brand/20', 'border-brand'],
      },
      success: {
        chip: ['text-success', 'bg-success/20', 'border-success'],
      },
      info: {
        chip: ['text-info', 'bg-info/20', 'border-info'],
      },
      warning: {
        chip: ['text-warning', 'bg-warning/20', 'border-warning'],
      },
      danger: {
        chip: ['text-danger', 'bg-danger/20', 'border-danger'],
      },
      amber: {
        chip: ['text-amber-500', 'bg-amber-500/20', 'border-amber-500'],
      },
      emerald: {
        chip: ['text-emerald-500', 'bg-emerald-500/20', 'border-emerald-500'],
      },
      teal: {
        chip: ['text-teal-500', 'bg-teal-500/20', 'border-teal-500'],
      },
      cyan: {
        chip: ['text-cyan-500', 'bg-cyan-500/20', 'border-cyan-500'],
      },
      sky: {
        chip: ['text-sky-500', 'bg-sky-500/20', 'border-sky-500'],
      },
      indigo: {
        chip: ['text-indigo-500', 'bg-indigo-500/20', 'border-indigo-500'],
      },
      violet: {
        chip: ['text-violet-500', 'bg-violet-500/20', 'border-violet-500'],
      },
      purple: {
        chip: ['text-purple-500', 'bg-purple-500/20', 'border-purple-500'],
      },
      fuchsia: {
        chip: ['text-fuchsia-500', 'bg-fuchsia-500/20', 'border-fuchsia-500'],
      },
      pink: {
        chip: ['text-pink-500', 'bg-pink-500/20', 'border-pink-500'],
      },
    },
    size: {
      sm: {
        chip: ['text-xs', 'px-1 py-0.5'],
      },
      md: {
        chip: ['text-xs', 'px-2 py-1'],
      },
      lg: {
        chip: ['text-xs', 'px-3 py-1.5'],
      },
    },
  },
  defaultVariants: {
    color: 'neutral',
    size: 'md',
  },
})

export type ChipVariantProps = VariantProps<typeof chip>
