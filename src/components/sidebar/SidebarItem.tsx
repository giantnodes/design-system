import type { Component } from '@/utils/types'

import React from 'react'

import { useSidebarContext } from '@/components/sidebar/use-sidebar-context.hook'

export type SidebarItemProps = Component<'li'>

const SidebarItem = React.forwardRef<HTMLLIElement, SidebarItemProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useSidebarContext()

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
