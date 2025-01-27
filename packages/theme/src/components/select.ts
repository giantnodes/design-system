import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { SIZE, SIZE_VARIANTS_DEFAULT } from '~/constants/sizes'

export const select = tv({
  slots: {
    select: ['relative'],
    button: [
      'inline-flex items-center gap-2',
      'bg-foreground',
      'w-full',
      'px-3 py-2',
      'rounded-md',
      'border',
      'cursor-pointer',
      'outline-none outline-0',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'focus:outline-dashed focus:outline-offset-2 focus:outline-1',
    ],
    value: ['pointer-events-none', 'truncate'],
    popover: ['bg-foreground', 'border border-shark', 'rounded-md', 'w-[--trigger-width]'],
    list: ['p-1.5'],
    option: [
      'flex items-center gap-x-2',
      'px-2 py-1.5',
      'rounded',
      'outline-none',
      'truncate',
      'cursor-pointer',
      'hover:bg-middleground',
    ],
    check: ['text-inherit', 'flex-shrink-0', 'ml-auto'],
    icon: ['flex-shrink-0'],
  },
  variants: {
    block: {
      true: {
        select: ['w-full'],
      },
    },
    size: {
      xs: {
        value: [SIZE.text.xs],
        option: [SIZE.text.xs],
        button: [SIZE.text.xs, SIZE.height.xs],
        check: ['size-4'],
      },
      sm: {
        value: [SIZE.text.sm],
        option: [SIZE.text.sm],
        button: [SIZE.text.sm, SIZE.height.sm],
        check: ['size-4'],
      },
      md: {
        value: [SIZE.text.md],
        option: [SIZE.text.md],
        button: [SIZE.text.md, SIZE.height.md],
        check: ['size-4'],
      },
      lg: {
        value: [SIZE.text.lg],
        option: [SIZE.text.lg],
        button: [SIZE.text.lg, SIZE.height.lg],
        check: ['size-5'],
      },
      xl: {
        value: [SIZE.text.xl],
        option: [SIZE.text.xl],
        button: [SIZE.text.xl, SIZE.height.xl],
        check: ['size-5'],
      },
    },
    status: {
      neutral: {
        button: ['text-white', 'bg-shark/80 hover:bg-shark', 'border-shark', 'focus:outline-shark'],
      },
      brand: {
        button: ['text-white', 'bg-brand/80 hover:bg-brand', 'border-brand', 'focus:outline-brand'],
      },
      success: {
        button: ['text-white', 'bg-success/80 hover:bg-success', 'border-success', 'focus:outline-success'],
      },
      info: {
        button: ['text-white', 'bg-info/80 hover:bg-info', 'border-info', 'focus:outline-info'],
      },
      warning: {
        button: ['text-white', 'bg-warning/80 hover:bg-warning', 'border-warning', 'focus:outline-warning'],
      },
      danger: {
        button: ['text-white', 'bg-danger/80 hover:bg-danger', 'border-danger', 'focus:outline-danger'],
      },
    },
  },
  defaultVariants: {
    size: SIZE_VARIANTS_DEFAULT,
    status: 'neutral',
  },
})

export type SelectVariantProps = VariantProps<typeof select>
