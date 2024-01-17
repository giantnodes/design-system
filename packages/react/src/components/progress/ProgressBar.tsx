import type { Component } from '@/utilities/types'

import React from 'react'

import { useProgressContext } from '@/components/progress/use-progress-context.hook'

export type ProgressBarProps = Omit<Component<'span'>, 'children'> & {
  color: string
  width: number
}

const ProgressBar = React.forwardRef<HTMLSpanElement, ProgressBarProps>((props, ref) => {
  const { as, className, style, color, width, ...rest } = props

  const Component = as || 'span'
  const { slots } = useProgressContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.bar({
        class: className,
      }),
      style: {
        ...style,
        backgroundColor: color,
        width: `${width}%`,
      },
      ...rest,
    }),
    [ref, slots, className, style, color, width, rest]
  )

  return <Component {...getProps()} />
})

ProgressBar.displayName = 'Progress.Bar'

export default ProgressBar
