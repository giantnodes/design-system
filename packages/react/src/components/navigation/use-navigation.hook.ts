import type { NavigationVariantProps } from '@giantnodes/design-system'

import { navigation } from '@giantnodes/design-system'
import React from 'react'

export type UseNavigationProps = NavigationVariantProps

export const useNavigation = (props: UseNavigationProps) => {
  const { position, size, orientation, variant } = props

  const slots = React.useMemo(
    () =>
      navigation({
        position,
        size,
        orientation,
        variant,
      }),
    [position, size, orientation, variant]
  )

  return {
    slots,
  }
}

export type UseNavigationReturn = ReturnType<typeof useNavigation>
