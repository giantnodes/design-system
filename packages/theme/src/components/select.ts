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
    button: [
      'flex items-center justify-between gap-2',
      'w-full px-3 py-2',
      'whitespace-nowrap',
      'focus:outline-none',
      'disabled:cursor-default disabled:opacity-50',
    ],
    icon: ['shrink-0'],
    check: ['text-inherit', 'ml-auto', 'shrink-0'],
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
      xs: {
        select: ['text-xs'],
        button: ['h-6'],
        option: ['text-xs'],
        check: ['size-4'],
        icon: ['size-4'],
      },
      sm: {
        select: ['text-sm'],
        button: ['h-8'],
        option: ['text-sm'],
        check: ['size-5'],
        icon: ['size-5'],
      },
      md: {
        select: ['text-base'],
        button: ['h-10'],
        option: ['text-base'],
        check: ['size-6'],
        icon: ['size-6'],
      },
      lg: {
        select: ['text-lg'],
        button: ['h-12'],
        option: ['text-lg'],
        check: ['size-7'],
        icon: ['size-7'],
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
