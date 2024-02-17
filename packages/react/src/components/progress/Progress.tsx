import type { UseProgressProps } from '@/components/progress/use-progress.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import ProgressBar from '@/components/progress/ProgressBar'
import { ProgressContext, useProgress } from '@/components/progress/use-progress.hook'

export type ProgressProps = Component<'div'> & UseProgressProps

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const { children, className, radius, size, ...rest } = props

  const context = useProgress({ radius, size })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.base({
        class: className,
      }),
      ...rest,
    }),
    [context.slots, ref, className, rest]
  )

  return (
    <ProgressContext.Provider value={context}>
      <div {...getProps()}>{children}</div>
    </ProgressContext.Provider>
  )
})

Progress.displayName = 'Progress'

export default Object.assign(Progress, {
  Bar: ProgressBar,
})
