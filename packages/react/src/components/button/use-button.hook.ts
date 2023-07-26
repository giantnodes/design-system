import type { ButtonVariantProps } from '@giantnodes/design-system'

import { button } from '@giantnodes/design-system'
import React from 'react'

export type UseButtonProps = ButtonVariantProps

export const useButton = (props: UseButtonProps) => {
  const { color, size, variant } = props

  const slots = React.useMemo(() => button({ color, size, variant }), [color, size, variant])

  return {
    slots,
  }
}

export type UseButtonReturn = ReturnType<typeof useButton>