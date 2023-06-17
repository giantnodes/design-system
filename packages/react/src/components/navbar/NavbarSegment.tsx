import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { NavbarProvider, useNavbarContext } from '@/components/navbar/use-navbar-context.hook'
import { useNavbar } from '@/components/navbar/use-navbar.hook'

export type NavbarSegmentProps = Component<'ul'> & Pick<UseNavbarProps, 'variant'>

const NavbarSegment = React.forwardRef<HTMLUListElement, NavbarSegmentProps>((props, ref) => {
  const { as, children, className, variant, ...rest } = props

  const { slots } = useNavbarContext()
  const navbar = useNavbar({ variant })

  const Component = as || 'ul'

  const getNavbarSegmentProps = React.useCallback(
    () => ({
      ref,
      className: slots.segment({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <NavbarProvider value={navbar}>
      <Component {...getNavbarSegmentProps()}>{children}</Component>
    </NavbarProvider>
  )
})

NavbarSegment.displayName = 'NavbarSegment'

export default NavbarSegment
