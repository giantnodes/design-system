import type { ToggleVariantProps } from '@giantnodes/theme'

import { toggle } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

export type UseSwitchProps = ToggleVariantProps

export type UseSwitchReturn = ReturnType<typeof useSwitch>

export const useSwitch = (props: UseSwitchProps) => {
  const { color, size } = props

  const slots = React.useMemo(() => toggle({ color, size }), [color, size])

  return {
    slots,
  }
}

export const [SwitchContext, useSwitchContext] = createContext<UseSwitchReturn>({
  name: 'SwitchContext',
  strict: true,
  errorMessage: 'useSwitchContext: `context` is undefined. Seems you forgot to wrap component within <Switch />',
})
