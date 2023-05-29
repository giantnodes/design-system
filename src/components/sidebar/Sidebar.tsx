import type { UseSidebarProps } from '@/components/sidebar/use-sidebar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import SidebarBrand from '@/components/sidebar/SidebarBrand'
import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarItem from '@/components/sidebar/SidebarItem'
import { useSidebar } from '@/components/sidebar/use-sidebar.hook'

export type SidebarProps = Component<'nav'> & UseSidebarProps

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useSidebar(props)

  const Component = as || 'nav'

  const getSidebarProps = React.useCallback(
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
    <Component {...getSidebarProps()}>
      <div className={slots.container()}>{children}</div>
    </Component>
  )
})

Sidebar.defaultProps = {
  ref: null,
}

export default Object.assign(Sidebar, {
  Brand: SidebarBrand,
  Content: SidebarContent,
  Item: SidebarItem,
})
