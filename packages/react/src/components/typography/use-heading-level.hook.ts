'use client'

import React from 'react'

import { create } from '~/utilities/create-context'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type UseHeadingLevelProps = {
  level?: HeadingLevel
}

type HeadingLevelContext = ReturnType<typeof useHeadingLevelValue>

export const useHeadingLevelValue = ({ level }: UseHeadingLevelProps) => {
  const calculated = React.useMemo<HeadingLevel>(() => {
    const value = level ?? 0

    return Math.max(Math.min(value + 1, 6), 1) as HeadingLevel
  }, [level])

  return {
    level: calculated,
  }
}

export const [HeadingLevelContext, useHeadingLevel] = create<HeadingLevelContext | undefined>({
  name: 'HeadingLevelContext',
  strict: false,
  errorMessage:
    'useHeadingLevel: `context` is undefined. Seems you forgot to wrap component within <Typography.HeadingLevel />',
})
