import type { UseSidebarProps } from '@/components/sidebar/use-sidebar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useSidebar } from '@/components/sidebar/use-sidebar.hook'

export type SidebarItemProps = Component<'li'> & UseSidebarProps

const SidebarItem = React.forwardRef<HTMLLIElement, SidebarItemProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useSidebar(props)

  const Component = as || 'li'

  const getSidebarItemProps = React.useCallback(
    () => ({
      ref,
      className: slots.item({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getSidebarItemProps()}>{children}</Component>
})

SidebarItem.defaultProps = {
  ref: null,
}

export default SidebarItem
