import type { NavbarVariantProps } from '@/components/navbar/Navbar.styles'

import React from 'react'

import navbar from '@/components/navbar/Navbar.styles'

export type UseNavbarProps = NavbarVariantProps

export const useNavbar = (props: UseNavbarProps) => {
  const { blurred, position, size } = props

  const slots = React.useMemo(
    () =>
      navbar({
        blurred,
        position,
        size,
      }),
    [blurred, position, size]
  )

  return {
    slots,
  }
}

export type UseNavbarReturn = ReturnType<typeof useNavbar>
