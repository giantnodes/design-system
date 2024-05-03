import type { CardVariantProps } from '@giantnodes/theme'

import { card } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

type UseCardProps = CardVariantProps

type UseCardReturn = ReturnType<typeof useCard>

export const useCard = (props: UseCardProps) => {
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
