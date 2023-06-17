import type { UseNavbarProps } from '@/components/navbar/use-navbar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useSidebarContext } from '@/components/sidebar/use-sidebar-context.hook'

export type SidebarSegmentProps = Component<'ul'> & Pick<UseNavbarProps, 'variant'>

const SidebarSegment = React.forwardRef<HTMLUListElement, SidebarSegmentProps>((props, ref) => {
  const { as, children, className, variant, ...rest } = props

  const { slots } = useSidebarContext()

  const Component = as || 'ul'

  const getSidebarSegmentProps = React.useCallback(
    () => ({
      ref,
      className: slots.segment({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getSidebarSegmentProps()}>{children}</Component>
})

SidebarSegment.displayName = 'SidebarSegment'

export default SidebarSegment
