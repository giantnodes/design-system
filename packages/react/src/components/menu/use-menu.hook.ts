'use client'

import type { MenuVariantProps } from '@giantnodes/theme'
import React from 'react'
import { menu } from '@giantnodes/theme'

import { create } from '~/utilities/create-context.jsx'

type UseMenuProps = MenuVariantProps

type MenuContextType = ReturnType<typeof useMenuValue>

export const useMenuValue = (props: UseMenuProps) => {
  const { size } = props

  const slots = React.useMemo(() => menu({ size }), [size])

  return {
    slots,
  }
}

export const [MenuContext, useMenu] = create<MenuContextType>({
  name: 'MenuContext',
  strict: true,
  errorMessage: 'useMenu: `context` is undefined. Seems you forgot to wrap component within <Menu.Root />',
})
