import type { NavbarVariantProps } from '@/components/navbar/Navbar.styles'

import React from 'react'

import navbar from '@/components/navbar/Navbar.styles'

export type UseNavbarProps = NavbarVariantProps

export const useNavbar = (props: UseNavbarProps) => {
  const { blurred, position, size, variant } = props

  const slots = React.useMemo(
    () =>
      navbar({
        blurred,
        position,
        size,
        variant,
      }),
    [blurred, position, size, variant]
  )

  return {
    blurred,
    position,
    size,
    variant,
    slots,
  }
}

export type UseNavbarReturn = ReturnType<typeof useNavbar>
