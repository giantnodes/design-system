'use client'

import type { NavigationVariantProps } from '@giantnodes/theme'
import React from 'react'
import { navigation } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseNavigationProps = NavigationVariantProps

type NavigationContextType = ReturnType<typeof useNavigationValue>

export const useNavigationValue = (props: UseNavigationProps) => {
  const { orientation, position, size, variant, isBordered } = props

  const slots = React.useMemo(
    () =>
      navigation({
        orientation,
        position,
        size,
        variant,
        isBordered,
      }),
    [orientation, position, size, variant, isBordered]
  )

  return {
    slots,
  }
}

export const [NavigationContext, useNavigation] = create<NavigationContextType>({
  name: 'NavigationContext',
  strict: true,
  errorMessage: 'useNavigation: `context` is undefined. Seems you forgot to wrap component within <Navigation.Root />',
})
