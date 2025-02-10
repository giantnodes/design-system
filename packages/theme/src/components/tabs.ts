import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const tabs = tv({
  slots: {
    root: [],
    list: ['flex'],
    item: [
      'relative',
      'cursor-pointer',
      'relative selected:after:absolute selected:after:inset-x-0 selected:after:bottom-[-1px] selected:after:h-[1px] selected:after:bg-inherit',
      'has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed has-[:disabled]:pointer-events-none',
      'focus:outline-shark focus:outline-dashed focus:outline-offset-2 focus:outline-1',
    ],
  },
  variants: {
    color: {
      neutral: {
        item: ['bg-foreground selected:bg-background'],
      },
    },
    orientation: {
      horizontal: {
        list: ['flex-row items-center'],
      },
      vertical: {
        list: ['flex-col'],
      },
    },
    size: {
      sm: {
        root: [],
        list: ['text-xs'],
      },
      md: {
        root: [],
        list: ['text-md'],
      },
      lg: {
        root: [],
        list: ['text-lg'],
      },
    },
    variant: {
      bookmark: {
        root: [],
        list: ['gap-0.5'],
        item: ['flex items-center shrink-0 gap-2 p-2 border-partition'],
      },
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      variant: 'bookmark',
      class: {
        item: ['rounded-t-sm border border-b-0'],
      },
    },
    {
      orientation: 'vertical',
      variant: 'bookmark',
      class: {
        item: ['[writing-mode:sideways-lr] w-fit rounded-l-sm border border-r-0'],
      },
    },
  ],
  defaultVariants: {
    color: 'neutral',
    orientation: 'horizontal',
    size: 'sm',
    variant: 'bookmark',
  },
})

export type TabsVariantProps = VariantProps<typeof tabs>
