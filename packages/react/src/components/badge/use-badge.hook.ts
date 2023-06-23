import type { BadgeVariantProps } from '@giantnodes/design-system'

import { badge } from '@giantnodes/design-system'
import React from 'react'

export type UseBadgeProps = BadgeVariantProps

export const useBadge = (props: UseBadgeProps) => {
  const { color, radius, size, variant } = props

  const slots = React.useMemo(() => badge({ color, radius, size, variant }), [color, radius, size, variant])

  return {
    slots,
  }
}

export type UseBadgeReturn = ReturnType<typeof useBadge>
