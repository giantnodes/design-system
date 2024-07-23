import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const tooltip = tv({
  slots: {
    root: [],
    trigger: ['flex', 'focus:outline-none'],
    popover: ['group', 'bg-foreground', 'border border-partition', 'rounded-md', 'px-3 py-1'],
    arrow: [
      'fill-foreground',
      'stroke-partition',
      'group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90',
    ],
  },
  variants: {},
  defaultVariants: {},
})

export type TooltipVariantProps = VariantProps<typeof tooltip>
