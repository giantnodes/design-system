import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useNavbar } from '@/components/navbar/use-navbar.hook'

export type NavbarContentProps = Component<'ul'> & UseNavbarProps

const NavbarContent = React.forwardRef<HTMLUListElement, NavbarContentProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavbar(props)

  const Component = as || 'ul'

  const getNavbarContentProps = React.useCallback(
    () => ({
      ref,
      className: slots.content({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getNavbarContentProps()}>{children}</Component>
})

NavbarContent.defaultProps = {
  ref: null,
}

export default NavbarContent
