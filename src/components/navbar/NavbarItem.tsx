import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useNavbarContext } from '@/components/navbar/use-navbar-context.hook'

export type NavbarItemProps = Component<'li'> & Pick<UseNavbarProps, 'variant'>

const NavbarItem = React.forwardRef<HTMLLIElement, NavbarItemProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavbarContext()

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
