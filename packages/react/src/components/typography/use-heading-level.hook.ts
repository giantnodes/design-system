import React from 'react'

import { createContext } from '@/utilities/context'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type UseHeadingLevelProps = {
  level: HeadingLevel
}

type UseHeadingLevelReturn = ReturnType<typeof useHeadingLevel>

export const useHeadingLevel = ({ level }: UseHeadingLevelProps) => {
  const calculated = React.useMemo<HeadingLevel>(() => {
    const value = level ?? 0

    return Math.max(Math.min(value + 1, 6), 1) as HeadingLevel
  }, [level])

  return {
    level: calculated,
  }
}

export const [HeadingLevelContext, useHeadingLevelContext] = createContext<UseHeadingLevelReturn>({
  name: 'HeadingLevelContext',
  strict: true,
  errorMessage:
    'useHeadingLevelContext: `context` is undefined. Seems you forgot to wrap component within <HeadingLevel />',
})
