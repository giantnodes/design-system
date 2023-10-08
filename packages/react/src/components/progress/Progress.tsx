import type { UseProgressProps } from '@/components/progress/use-progress.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import ProgressBar from '@/components/progress/ProgressBar'
import { ProgressProvider } from '@/components/progress/use-progress-context.hook'
import { useProgress } from '@/components/progress/use-progress.hook'

export type ProgressProps = Component<'div'> & UseProgressProps

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const { children, className, ...rest } = props

  const context = useProgress(props)

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
    <ProgressProvider value={context}>
      <div {...getProps()}>{children}</div>
    </ProgressProvider>
  )
})

Progress.displayName = 'Progress'

export default Object.assign(Progress, {
  Bar: ProgressBar,
})
