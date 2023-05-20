import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useNavbar } from '@/components/navbar/use-navbar.hook'

export type NavbarBrandProps = Component<'div'> & UseNavbarProps

const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavbar(props)

  const Component = as || 'div'

  const getNavbarBrandProps = React.useCallback(
    () => ({
      ref,
      className: slots.brand({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getNavbarBrandProps()}>{children}</Component>
})

NavbarBrand.defaultProps = {
  ref: null,
}

export default NavbarBrand
