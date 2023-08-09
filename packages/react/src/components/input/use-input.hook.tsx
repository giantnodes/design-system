'use client'

import type { InputVariantProps } from '@giantnodes/theme'

import { input } from '@giantnodes/theme'
import React from 'react'

export type UseInputProps = InputVariantProps

export const useInput = (props: UseInputProps) => {
  const { status, size, variant } = props

  const [isFocused, setFocused] = React.useState<boolean>(false)
  const [isDisabled, setDisabled] = React.useState<boolean>(false)

  const slots = React.useMemo(
    () => input({ status, size, variant, isDisabled, isFocused }),
    [status, size, variant, isDisabled, isFocused]
  )

  return {
    slots,
    isDisabled,
    setDisabled,
    isFocused,
    setFocused,
  }
}

export type UseInputReturn = ReturnType<typeof useInput>
