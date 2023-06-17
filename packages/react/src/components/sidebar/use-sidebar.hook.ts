import type { SidebarVariantProps } from '@giantnodes/design-system'

import React from 'react'
import { sidebar } from '@giantnodes/design-system'

export type UseSidebarProps = SidebarVariantProps

export const useSidebar = (props: UseSidebarProps) => {
  const { position, size } = props

  const slots = React.useMemo(() => sidebar({ position, size }), [position, size])

  return {
    slots,
  }
}

export type UseSidebarReturn = ReturnType<typeof useSidebar>
