'use client'

import type { InputVariantProps } from '@giantnodes/theme'
import React from 'react'
import { input } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseInputProps = InputVariantProps

type InputContextType = ReturnType<typeof useInputValue>

export const useInputValue = (props: UseInputProps) => {
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

export const [InputContext, useInput] = create<InputContextType | undefined>({
  name: 'InputContext',
  strict: false,
  errorMessage: 'useInput: `context` is undefined. Seems you forgot to wrap component within <Input.Root />',
})
