import type { SidebarVariantProps } from '@/components/sidebar/Sidebar.styles'

import React from 'react'

import sidebar from '@/components/sidebar/Sidebar.styles'

export type UseSidebarProps = SidebarVariantProps

export const useSidebar = (props: UseSidebarProps) => {
  const { position, size } = props

  const slots = React.useMemo(() => sidebar({ position, size }), [position, size])

  return {
    slots,
  }
}

export type UseSidebarReturn = ReturnType<typeof useSidebar>
