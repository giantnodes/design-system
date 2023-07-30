import type { CardVariantProps } from '@giantnodes/design-system'

import { card } from '@giantnodes/design-system'
import React from 'react'

export type UseCardProps = CardVariantProps

export const useCard = (props: UseCardProps) => {
  const slots = React.useMemo(() => card({}), [])

  return {
    slots,
  }
}

export type UseCardReturn = ReturnType<typeof useCard>
