'use client'

import type { UseCardReturn } from '@/components/card/use-card.hook'

import { createContext } from '@/utilities/context'

export const [CardProvider, useCardContext] = createContext<UseCardReturn>({
  name: 'CardContext',
  strict: true,
  errorMessage: 'useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />',
})
