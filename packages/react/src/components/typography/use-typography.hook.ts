import type { TypographyVariantProps } from '@giantnodes/theme'

import { typography } from '@giantnodes/theme'
import React from 'react'

export type UseTypographyProps = TypographyVariantProps

export const useTypography = (props: UseTypographyProps) => {
  const { level } = props

  const slots = React.useMemo(() => typography({ level }), [level])

  return {
    slots,
  }
}

export type UseTypographyReturn = ReturnType<typeof useTypography>
