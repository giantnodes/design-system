'use client'

import type { TreeVariantProps } from '@giantnodes/theme'
import React from 'react'
import { tree } from '@giantnodes/theme'

import { create } from '~/utilities/create-context.jsx'

type UseTreeProps = TreeVariantProps

type TreeContextType = ReturnType<typeof useTreeValue>

export const useTreeValue = (_: UseTreeProps) => {
  const slots = React.useMemo(() => tree(), [])

  return {
    slots,
  }
}

export const [TreeContext, useTree] = create<TreeContextType>({
  name: 'TreeContext',
  strict: true,
  errorMessage: 'useTree: `context` is undefined. Seems you forgot to wrap component within <Tree.Root />',
})
