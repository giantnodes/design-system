'use client'

import type { CardVariantProps } from '@giantnodes/theme'
import React from 'react'
import { card } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseCardProps = CardVariantProps

type CardContextType = ReturnType<typeof useCardValue>

export const useCardValue = ({ size }: UseCardProps) => {
  const slots = React.useMemo(() => card({ size }), [size])

  return {
    slots,
  }
}

export const [CardContext, useCard] = create<CardContextType>({
  name: 'CardContext',
  strict: true,
  errorMessage: 'useCard: `context` is undefined. Seems you forgot to wrap component within <Card.Root />',
})
