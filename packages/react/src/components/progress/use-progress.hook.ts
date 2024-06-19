'use client'

import type { ProgressVariantProps } from '@giantnodes/theme'
import React from 'react'
import { progress } from '@giantnodes/theme'

import { createContext } from '~/utilities/context'

type UseProgressProps = ProgressVariantProps

type UseProgressReturn = ReturnType<typeof useProgress>

export const useProgress = (props: UseProgressProps) => {
  const { radius, size } = props

  const slots = React.useMemo(() => progress({ radius, size }), [radius, size])

  return {
    slots,
  }
}

export const [ProgressContext, useProgressContext] = createContext<UseProgressReturn>({
  name: 'ProgressContext',
  strict: true,
  errorMessage: 'useProgressContext: `context` is undefined. Seems you forgot to wrap component within <Progress />',
})
