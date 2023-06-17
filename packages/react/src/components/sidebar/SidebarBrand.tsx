import type { Component } from '@/utilities/types'

import React from 'react'

import { useSidebarContext } from '@/components/sidebar/use-sidebar-context.hook'

export type SidebarBrandProps = Component<'div'>

const SidebarBrand = React.forwardRef<HTMLDivElement, SidebarBrandProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useSidebarContext()

  const Component = as || 'div'

  const getSidebarBrandProps = React.useCallback(
    () => ({
      ref,
      className: slots.brand({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getSidebarBrandProps()}>{children}</Component>
})

SidebarBrand.displayName = 'SidebarBrand'

export default SidebarBrand
