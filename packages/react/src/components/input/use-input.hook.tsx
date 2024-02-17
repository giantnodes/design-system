import type { InputVariantProps } from '@giantnodes/theme'

import { input } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

export type UseInputProps = InputVariantProps

export type UseInputReturn = ReturnType<typeof useInput>

export const useInput = (props: UseInputProps) => {
  const { status, size, transparent, variant } = props

  const slots = React.useMemo(() => input({ status, size, transparent, variant }), [status, size, transparent, variant])

  return {
    slots,
  }
}

export const [InputContext, useInputContext] = createContext<UseInputReturn>({
  name: 'InputContext',
  strict: true,
  errorMessage: 'useInputContext: `context` is undefined. Seems you forgot to wrap component within <Input />',
})
