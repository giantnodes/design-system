import type { ChipVariantProps } from '@giantnodes/theme'

import { chip } from '@giantnodes/theme'
import React from 'react'

export type UseChipProps = ChipVariantProps

export type UseChipReturn = ReturnType<typeof useChip>

export const useChip = (props: UseChipProps) => {
  const { color, radius, size, variant } = props

  const slots = React.useMemo(() => chip({ color, radius, size, variant }), [color, radius, size, variant])

  return {
    slots,
  }
}
