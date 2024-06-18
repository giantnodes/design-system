'use client'

import type { InputVariantProps } from '@giantnodes/theme'

import { input } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

type UseInputProps = InputVariantProps

type UseInputReturn = ReturnType<typeof useInput>

export const useInput = (props: UseInputProps) => {
  const { color, size, shape, variant } = props

  const slots = React.useMemo(() => input({ color, size, shape, variant }), [color, size, shape, variant])

  return {
    slots,
    color,
    size,
    shape,
    variant,
  }
}

export const [InputContext, useInputContext] = createContext<UseInputReturn>({
  name: 'InputContext',
  strict: false,
  errorMessage: 'useInputContext: `context` is undefined. Seems you forgot to wrap component within <Input />',
})
