'use client'

import type { TooltipVariantProps } from '@giantnodes/theme'
import React from 'react'
import { tooltip } from '@giantnodes/theme'

import { createContext } from '~/utilities/context'

type UseTooltipProps = TooltipVariantProps

type UseTooltipReturn = ReturnType<typeof useTooltip>

export const useTooltip = (_: UseTooltipProps) => {
  const slots = React.useMemo(() => tooltip(), [])

  return {
    slots,
  }
}

export const [TooltipContext, useTooltipContext] = createContext<UseTooltipReturn>({
  name: 'TooltipContext',
  strict: true,
  errorMessage: 'useTooltipContext: `context` is undefined. Seems you forgot to wrap component within <Tooltip.Root />',
})
