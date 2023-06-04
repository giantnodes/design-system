import type { BadgeVariantProps } from '@/components/badge/Badge.styles'

import React from 'react'

import badge from '@/components/badge/Badge.styles'

export type UseBadgeProps = BadgeVariantProps

export const useBadge = (props: UseBadgeProps) => {
  const { color, radius, size, variant } = props

  const slots = React.useMemo(() => badge({ color, radius, size, variant }), [color, radius, size, variant])

  return {
    slots,
  }
}

export type UseBadgeReturn = ReturnType<typeof useBadge>
