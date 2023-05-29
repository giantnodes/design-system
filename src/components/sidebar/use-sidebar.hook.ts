import type { SidebarVariantProps } from '@/components/sidebar/Sidebar.styles'

import React from 'react'

import sidebar from '@/components/sidebar/Sidebar.styles'

export type UseSidebarProps = SidebarVariantProps

export const useSidebar = (props: UseSidebarProps) => {
  const { align, position, size } = props

  const slots = React.useMemo(
    () =>
      sidebar({
        align,
        position,
        size,
      }),
    [align, position, size]
  )

  return {
    slots,
  }
}

export type UseSidebarReturn = ReturnType<typeof useSidebar>
