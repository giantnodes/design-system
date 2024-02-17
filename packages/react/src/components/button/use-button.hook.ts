import type { ButtonVariantProps } from '@giantnodes/theme'

import { button } from '@giantnodes/theme'
import React from 'react'

export type UseButtonProps = ButtonVariantProps

export type UseButtonReturn = ReturnType<typeof useButton>

export const useButton = (props: UseButtonProps) => {
  const { color, shape, size, variant } = props

  const slots = React.useMemo(() => button({ color, shape, size, variant }), [color, shape, size, variant])

  return {
    slots,
  }
}
