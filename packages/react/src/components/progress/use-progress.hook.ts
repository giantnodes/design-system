import type { ProgressVariantProps } from '@giantnodes/theme'

import { progress } from '@giantnodes/theme'
import React from 'react'

export type UseProgressProps = ProgressVariantProps

export const useProgress = ({ radius, size }: ProgressVariantProps) => {
  const slots = React.useMemo(() => progress({ radius, size }), [radius, size])

  return {
    slots,
  }
}

export type UseProgressReturn = ReturnType<typeof useProgress>
