import type { HeadingVariantProps } from '@giantnodes/design-system'

import { typography } from '@giantnodes/design-system'
import React from 'react'

export type UseHeadingProps = HeadingVariantProps

export const useTypography = (props: UseHeadingProps) => {
  const { level } = props

  const slots = React.useMemo(() => typography({ level }), [level])

  return {
    slots,
  }
}

export type UseTypographyReturn = ReturnType<typeof useTypography>
