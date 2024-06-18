'use client'

import type { AlertVariantProps } from '@giantnodes/theme'

import { alert } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

type UseAlertProps = AlertVariantProps

type UseAlertReturn = ReturnType<typeof useAlert>

export const useAlert = (props: UseAlertProps) => {
  const { color } = props

  const slots = React.useMemo(() => alert({ color }), [color])

  return {
    slots,
  }
}

export const [AlertContext, useAlertContext] = createContext<UseAlertReturn>({
  name: 'AlertContext',
  strict: true,
  errorMessage: 'useAlertContext: `context` is undefined. Seems you forgot to wrap component within <Alert />',
})
