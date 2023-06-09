import type { Component } from '@/utils/types'

import React from 'react'

import { useNavbarContext } from '@/components/navbar/use-navbar-context.hook'

export type NavbarContentProps = Component<'div'>

const NavbarContent = React.forwardRef<HTMLDivElement, NavbarContentProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavbarContext()

  const Component = as || 'div'

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
