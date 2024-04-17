import type { Component } from '@/utilities/types'
import type { ButtonVariantProps } from '@giantnodes/theme'
import type { ButtonProps } from 'react-aria-components'

import { button } from '@giantnodes/theme'
import React from 'react'

export type UseButtonProps = Component<'button'> &
  ButtonProps &
  ButtonVariantProps & {
    isLoading?: boolean
  }

export type UseButtonReturn = ReturnType<typeof useButton>

export const useButton = (props: UseButtonProps) => {
  const { isLoading = false, disabled = false, isDisabled: isDisabledProp = false, color, shape, size, variant } = props

  const slots = React.useMemo(() => button({ color, shape, size, variant }), [color, shape, size, variant])

  const isDisabled = React.useMemo<boolean>(
    () => disabled || isDisabledProp || isLoading,
    [disabled, isDisabledProp, isLoading]
  )

  return {
    slots,
    isDisabled,
  }
}
