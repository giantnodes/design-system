import type { UseSidebarProps } from '@/components/sidebar/use-sidebar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useSidebar } from '@/components/sidebar/use-sidebar.hook'

export type SidebarContentProps = Component<'ul'> & UseSidebarProps

const SidebarContent = React.forwardRef<HTMLUListElement, SidebarContentProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useSidebar(props)

  const Component = as || 'ul'

  const getSidebarContentProps = React.useCallback(
    () => ({
      ref,
      className: slots.content({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getSidebarContentProps()}>{children}</Component>
})

SidebarContent.defaultProps = {
  ref: null,
}

export default SidebarContent
