import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import NavbarBrand from '@/components/navbar/NavbarBrand'
import NavbarContent from '@/components/navbar/NavbarContent'
import NavbarItem from '@/components/navbar/NavbarItem'
import { useNavbar } from '@/components/navbar/use-navbar.hook'

export type NavbarProps = Component<'nav'> & UseNavbarProps

const Navbar = React.forwardRef<HTMLElement, NavbarProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavbar(props)

  const Component = as || 'nav'

  const getNavbarProps = React.useCallback(
    () => ({
      ref,
      className: slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component {...getNavbarProps()}>
      <div className={slots.container()}>{children}</div>
    </Component>
  )
})

Navbar.defaultProps = {
  ref: null,
}

export default Object.assign(Navbar, {
  Brand: NavbarBrand,
  Content: NavbarContent,
  Item: NavbarItem,
})
