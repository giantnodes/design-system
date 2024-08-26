'use client'

import type { ProgressVariantProps } from '@giantnodes/theme'
import React from 'react'
import { progress } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseProgressProps = ProgressVariantProps

type ProgressContextType = ReturnType<typeof useProgressValue>

export const useProgressValue = (props: UseProgressProps) => {
  const { radius, size } = props

  const slots = React.useMemo(() => progress({ radius, size }), [radius, size])

  return {
    slots,
  }
}

export const [ProgressContext, useProgress] = create<ProgressContextType>({
  name: 'ProgressContext',
  strict: true,
  errorMessage: 'useProgress: `context` is undefined. Seems you forgot to wrap component within <Progress.Root />',
})
