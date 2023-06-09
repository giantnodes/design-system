import type { Component } from '@/utils/types'

import React from 'react'

import { useNavbarContext } from '@/components/navbar/use-navbar-context.hook'

export type NavbarBrandProps = Component<'div'>

const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavbarContext()

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
