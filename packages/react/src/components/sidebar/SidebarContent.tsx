import type { Component } from '@/utilities/types'

import React from 'react'

import { useSidebarContext } from '@/components/sidebar/use-sidebar-context.hook'

export type SidebarContentProps = Component<'div'>

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useSidebarContext()

  const Component = as || 'div'

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

SidebarContent.displayName = 'SidebarContent'

export default SidebarContent
