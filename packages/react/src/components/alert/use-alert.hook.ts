import type { AlertVariantProps } from '@giantnodes/theme'

import { alert } from '@giantnodes/theme'
import React from 'react'

export type UseAlertProps = AlertVariantProps

export const useAlert = ({ color }: UseAlertProps) => {
  const slots = React.useMemo(() => alert({ color }), [color])

  return {
    slots,
  }
}

export type UseAlertReturn = ReturnType<typeof useAlert>
