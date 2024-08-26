'use client'

import type { TooltipVariantProps } from '@giantnodes/theme'
import React from 'react'
import { tooltip } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseTooltipProps = TooltipVariantProps

type TooltipContextType = ReturnType<typeof useTooltipValue>

export const useTooltipValue = (_: UseTooltipProps) => {
  const slots = React.useMemo(() => tooltip(), [])

  return {
    slots,
  }
}

export const [TooltipContext, useTooltip] = create<TooltipContextType>({
  name: 'TooltipContext',
  strict: true,
  errorMessage: 'useTooltip: `context` is undefined. Seems you forgot to wrap component within <Tooltip.Root />',
})
