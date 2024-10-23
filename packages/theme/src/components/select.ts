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
    value: ['flex items-center grow gap-1', 'overflow-hidden'],
    button: ['flex flex-row items-center justify-between', 'w-full', 'p-1.5', 'focus:outline-none'],
    icon: ['shrink-0'],
    check: ['text-inherit', 'h-5 w-5', 'ml-auto', 'shrink-0'],
    popover: ['bg-foreground', 'border border-solid border-partition', 'rounded-md', 'w-[--trigger-width]'],
    list: ['flex flex-col gap-1', 'p-1', 'outline-none'],
    option: [
      'flex items-center gap-2',
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
        select: ['text-sm'],
        button: ['h-8 min-h-8'],
        option: ['text-sm'],
      },
      md: {
        select: ['text-base'],
        button: ['h-10 min-h-10'],
        option: ['text-base'],
      },
      lg: {
        select: ['text-lg'],
        button: ['h-12 min-h-12'],
        option: ['text-lg'],
      },
    },
    status: {
      neutral: {
        select: ['border-partition'],
        option: ['hover:bg-middleground', 'data-[selected=true]:bg-middleground'],
      },
      brand: {
        select: ['border-brand'],
        option: ['hover:bg-brand/20', 'data-[selected=true]:bg-brand/20'],
      },
      success: {
        select: ['border-success'],
        option: ['hover:bg-success/20', 'data-[selected=true]:bg-success/20'],
      },
      info: {
        select: ['border-info'],
        option: ['hover:bg-info/20', 'data-[selected=true]:g-info/20'],
      },
      warning: {
        select: ['border-warning'],
        option: ['hover:bg-warning/20', 'data-[selected=true]:bg-warning/20'],
      },
      danger: {
        select: ['border-danger'],
        option: ['hover:bg-danger/20', 'data-[selected=true]:bg-danger/20'],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'neutral',
  },
})

export type SelectVariantProps = VariantProps<typeof select>
