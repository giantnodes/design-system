import type { UseSidebarProps } from '@/components/sidebar/use-sidebar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useSidebar } from '@/components/sidebar/use-sidebar.hook'

export type SidebarBrandProps = Component<'div'> & UseSidebarProps

const SidebarBrand = React.forwardRef<HTMLDivElement, SidebarBrandProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useSidebar(props)

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

SidebarBrand.defaultProps = {
  ref: null,
}

export default SidebarBrand
