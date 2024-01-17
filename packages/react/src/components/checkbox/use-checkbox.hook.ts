import type { CheckboxVariantProps } from '@giantnodes/theme'

import { checkbox } from '@giantnodes/theme'
import React from 'react'

export type UseCheckboxProps = Omit<CheckboxVariantProps, 'checked'>

export const useCheckbox = (props: UseCheckboxProps) => {
  const { size } = props

  const slots = React.useMemo(() => checkbox({ size }), [size])

  return {
    slots,
  }
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>
