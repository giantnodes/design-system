'use client'

import type { MenuVariantProps } from '@giantnodes/theme'
import React from 'react'
import { menu } from '@giantnodes/theme'

import { createContext } from '~/utilities/context'

type UseMenuProps = MenuVariantProps

type UseMenuReturn = ReturnType<typeof useMenu>

export const useMenu = (props: UseMenuProps) => {
  const { size, color } = props

  const slots = React.useMemo(() => menu({ size, color }), [size, color])

  return {
    slots,
  }
}

export const [MenuContext, useMenuContext] = createContext<UseMenuReturn>({
  name: 'MenuContext',
  strict: true,
  errorMessage: 'useMenuContext: `context` is undefined. Seems you forgot to wrap component within <Menu />',
})
