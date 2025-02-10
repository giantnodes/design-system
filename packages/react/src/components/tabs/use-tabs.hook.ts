'use client'

import type { TabsVariantProps } from '@giantnodes/theme'
import React from 'react'
import { tabs } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseTabsProps = TabsVariantProps

type TabsContextType = ReturnType<typeof useTabsValue>

export const useTabsValue = ({ color, orientation, size, variant }: UseTabsProps) => {
  const slots = React.useMemo(() => tabs({ color, orientation, size, variant }), [color, orientation, size, variant])

  return {
    slots,
  }
}

export const [TabsContext, useTabs] = create<TabsContextType>({
  name: 'TabsContext',
  strict: true,
  errorMessage: 'useTabs: `context` is undefined. Seems you forgot to wrap component within <Tabs.Root />',
})
