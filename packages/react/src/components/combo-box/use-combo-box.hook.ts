'use client'

import type { ComboBoxVariantProps } from '@giantnodes/theme'
import React from 'react'
import { combobox } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseComboBoxProps = ComboBoxVariantProps

type ComboBoxContextType = ReturnType<typeof useComboBoxValue>

export const useComboBoxValue = (props: UseComboBoxProps) => {
  const { size, status } = props

  const slots = React.useMemo(() => combobox({ size, status }), [size, status])

  return {
    slots,
  }
}

export const [ComboBoxContext, useComboBox] = create<ComboBoxContextType>({
  name: 'ComboBoxContext',
  strict: true,
  errorMessage: 'useComboBox: `context` is undefined. Seems you forgot to wrap component within <ComboBox.Root />',
})
