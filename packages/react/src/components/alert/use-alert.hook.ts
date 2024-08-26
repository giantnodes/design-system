'use client'

import type { AlertVariantProps } from '@giantnodes/theme'
import React from 'react'
import { alert } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseAlertProps = AlertVariantProps

type AlertContextType = ReturnType<typeof useAlertValue>

export const useAlertValue = (props: UseAlertProps) => {
  const { color } = props

  const slots = React.useMemo(() => alert({ color }), [color])

  return {
    slots,
  }
}

export const [AlertContext, useAlert] = create<AlertContextType>({
  name: 'AlertContext',
  strict: true,
  errorMessage: 'useAlert: `context` is undefined. Seems you forgot to wrap component within <Alert.Root />',
})
