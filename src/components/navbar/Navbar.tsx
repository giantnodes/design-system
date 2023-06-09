import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import NavbarBrand from '@/components/navbar/NavbarBrand'
import NavbarContent from '@/components/navbar/NavbarContent'
import NavbarItem from '@/components/navbar/NavbarItem'
import NavbarSegment from '@/components/navbar/NavbarSegment'
import { NavbarProvider } from '@/components/navbar/use-navbar-context.hook'
import { useNavbar } from '@/components/navbar/use-navbar.hook'

export type NavbarProps = Component<'nav'> & UseNavbarProps

const Navbar = React.forwardRef<HTMLElement, NavbarProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const context = useNavbar(props)
  const Component = as || 'nav'

  const getNavbarProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, context.slots, className, rest]
  )

  return (
    <NavbarProvider value={context}>
      <Component {...getNavbarProps()}>
        <div className={context.slots.container()}>{children}</div>
      </Component>
    </NavbarProvider>
  )
})

Navbar.defaultProps = {
  ref: null,
}

export default Object.assign(Navbar, {
  Brand: NavbarBrand,
  Content: NavbarContent,
  Item: NavbarItem,
  Segment: NavbarSegment,
})
