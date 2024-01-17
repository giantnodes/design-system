'use client'

import type { InputVariantProps } from '@giantnodes/theme'

import { input } from '@giantnodes/theme'
import React from 'react'

export type UseInputProps = InputVariantProps

export const useInput = (props: UseInputProps) => {
  const { status, size, variant } = props

  const slots = React.useMemo(() => input({ status, size, variant }), [status, size, variant])

  return {
    slots,
  }
}

export type UseInputReturn = ReturnType<typeof useInput>
