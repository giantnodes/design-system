import type { CardVariantProps } from '@giantnodes/theme'

import { card } from '@giantnodes/theme'
import React from 'react'

export type UseCardProps = CardVariantProps

export const useCard = (props: UseCardProps) => {
  const { size, transparent } = props

  const slots = React.useMemo(() => card({ size, transparent }), [size, transparent])

  return {
    slots,
  }
}

export type UseCardReturn = ReturnType<typeof useCard>
