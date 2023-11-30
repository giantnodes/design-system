import type { CardVariantProps } from '@giantnodes/theme'

import { card } from '@giantnodes/theme'
import React from 'react'

export type UseCardProps = CardVariantProps

export const useCard = (props: UseCardProps) => {
  const { transparent } = props

  const slots = React.useMemo(() => card({ transparent }), [transparent])

  return {
    slots,
  }
}

export type UseCardReturn = ReturnType<typeof useCard>
