import type { UseSidebarProps } from '@/components/sidebar/use-sidebar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import SidebarBrand from '@/components/sidebar/SidebarBrand'
import SidebarContent from '@/components/sidebar/SidebarContent'
import SidebarItem from '@/components/sidebar/SidebarItem'
import SidebarSegment from '@/components/sidebar/SidebarSegment'
import { SidebarProvider } from '@/components/sidebar/use-sidebar-context.hook'
import { useSidebar } from '@/components/sidebar/use-sidebar.hook'

export type SidebarProps = Component<'nav'> & UseSidebarProps

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const context = useSidebar(props)
  const Component = as || 'nav'

  const getSidebarProps = React.useCallback(
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
    <SidebarProvider value={context}>
      <Component {...getSidebarProps()}>
        <div className={context.slots.container()}>{children}</div>
      </Component>
    </SidebarProvider>
  )
})

Sidebar.displayName = 'Sidebar'

export default Object.assign(Sidebar, {
  Brand: SidebarBrand,
  Content: SidebarContent,
  Item: SidebarItem,
  Segment: SidebarSegment,
})
