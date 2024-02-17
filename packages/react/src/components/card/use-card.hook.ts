import type { CardVariantProps } from '@giantnodes/theme'

import { card } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

export type UseCardProps = CardVariantProps

export type UseCardReturn = ReturnType<typeof useCard>

export const useCard = (props: UseCardProps) => {
  const { transparent } = props

  const slots = React.useMemo(() => card({ transparent }), [transparent])

  return {
    slots,
  }
}

export const [CardContext, useCardContext] = createContext<UseCardReturn>({
  name: 'CardContext',
  strict: true,
  errorMessage: 'useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />',
})
