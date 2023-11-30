'use client'

import type { UseProgressReturn } from '@/components/progress/use-progress.hook'

import { createContext } from '@/utilities/context'

export const [ProgressProvider, useProgressContext] = createContext<UseProgressReturn>({
  name: 'ProgressContext',
  strict: true,
  errorMessage: 'useProgressContext: `context` is undefined. Seems you forgot to wrap component within <Progress />',
})
