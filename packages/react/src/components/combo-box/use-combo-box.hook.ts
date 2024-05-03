import type { ComboBoxVariantProps } from '@giantnodes/theme'

import { combobox } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

type UseComboBoxProps = ComboBoxVariantProps

type UseComboBoxReturn = ReturnType<typeof useComboBox>

export const useComboBox = (props: UseComboBoxProps) => {
  const { size, status } = props

  const slots = React.useMemo(() => combobox({ size, status }), [size, status])

  return {
    slots,
  }
}

export const [ComboBoxContext, useComboBoxContext] = createContext<UseComboBoxReturn>({
  name: 'ComboBoxContext',
  strict: true,
  errorMessage: 'useComboBox: `context` is undefined. Seems you forgot to wrap component within <ComboBox />',
})
