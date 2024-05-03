import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const select = tv({
  slots: {
    select: [
      'flex flex-col items-start',
      'bg-foreground',
      'text-content',
      'border border-solid',
      'rounded-md',
      'w-full',
      'cursor-pointer',
      'has-[:disabled]:opacity-50',
    ],
    placeholder: ['text-subtitle'],
    button: ['flex flex-row items-center justify-between', 'w-full', 'p-1.5', 'focus:outline-none'],
    icon: [],
    popover: ['bg-foreground', 'border border-solid border-partition', 'rounded-md', 'w-[--trigger-width]'],
    list: ['flex flex-col gap-1', 'p-1', 'outline-none'],
    option: [
      'flex tems-center',
      'px-2 py-1',
      'rounded-md',
      'cursor-pointer',
      'outline-none',
      'text-content',
      'overflow-hidden',
      'disabled:opacity-50 disabled:cursor-default',
    ],
  },
  variants: {
    size: {
      sm: {
        select: ['text-xs'],
        option: ['text-xs'],
      },
      md: {
        select: ['text-sm'],
        option: ['text-sm'],
      },
      lg: {
        select: ['text-md'],
        option: ['text-md'],
      },
    },
    status: {
      neutral: {
        select: ['border-partition'],
        option: ['hover:bg-middleground'],
      },
      brand: {
        select: ['border-brand'],
        option: ['hover:bg-brand/20'],
      },
      success: {
        select: ['border-success'],
        option: ['hover:bg-success/20'],
      },
      info: {
        select: ['border-info'],
        option: ['hover:bg-info/20'],
      },
      warning: {
        select: ['border-warning'],
        option: ['hover:bg-warning/20'],
      },
      danger: {
        select: ['border-danger'],
        option: ['hover:bg-danger/20'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'neutral',
  },
})

export type SelectVariantProps = VariantProps<typeof select>
