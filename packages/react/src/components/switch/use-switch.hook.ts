import type { ToggleVariantProps } from '@giantnodes/theme'

import { toggle } from '@giantnodes/theme'
import React from 'react'

export type UseSwitchProps = ToggleVariantProps

export const useSwitch = (props: UseSwitchProps) => {
  const { color, size } = props

  const slots = React.useMemo(() => toggle({ color, size }), [color, size])

  return {
    slots,
  }
}

export type UseSwitchReturn = ReturnType<typeof useSwitch>
