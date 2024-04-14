import type { DividerVariantProps } from '@giantnodes/theme'

import { divider } from '@giantnodes/theme'
import React from 'react'

export type UseDividerProps = DividerVariantProps

export type UseDividerReturn = ReturnType<typeof useDivider>

export const useDivider = (props: UseDividerProps) => {
  const { orientation } = props

  const slots = React.useMemo(() => divider({ orientation }), [orientation])

  return {
    slots,
  }
}
