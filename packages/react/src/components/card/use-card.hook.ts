'use client'

import React from 'react'
import { card } from '@giantnodes/theme'

import { createContext } from '~/utilities/context'

type UseCardReturn = ReturnType<typeof useCard>

export const useCard = () => {
  const slots = React.useMemo(() => card({}), [])

  return {
    slots,
  }
}

export const [CardContext, useCardContext] = createContext<UseCardReturn>({
  name: 'CardContext',
  strict: true,
  errorMessage: 'useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />',
})
