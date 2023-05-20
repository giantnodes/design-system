import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useNavbar } from '@/components/navbar/use-navbar.hook'

export type NavbarItemProps = Component<'li'> & UseNavbarProps

const NavbarItem = React.forwardRef<HTMLLIElement, NavbarItemProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavbar(props)

  const Component = as || 'li'

  const getNavbarItemProps = React.useCallback(
    () => ({
      ref,
      className: slots.item({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getNavbarItemProps()}>{children}</Component>
})

NavbarItem.defaultProps = {
  ref: null,
}

export default NavbarItem
