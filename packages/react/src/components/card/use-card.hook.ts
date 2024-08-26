'use client'

import React from 'react'
import { card } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type CardContextType = ReturnType<typeof useCardValue>

export const useCardValue = () => {
  const slots = React.useMemo(() => card({}), [])

  return {
    slots,
  }
}

export const [CardContext, useCard] = create<CardContextType>({
  name: 'CardContext',
  strict: true,
  errorMessage: 'useCard: `context` is undefined. Seems you forgot to wrap component within <Card.Root />',
})
