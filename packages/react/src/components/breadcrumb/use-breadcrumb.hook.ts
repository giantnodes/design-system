'use client'

import type { BreadcrumbVariantProps } from '@giantnodes/theme'
import React from 'react'
import { breadcrumb } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseBreadcrumbProps = BreadcrumbVariantProps & {
  separator?: React.ReactNode
}

type BreadcrumbContextType = ReturnType<typeof useBreadcrumbValue>

export const useBreadcrumbValue = (props: UseBreadcrumbProps) => {
  const { size, separator = '/' } = props

  const slots = React.useMemo(() => breadcrumb({ size }), [size])

  return {
    slots,
    separator,
  }
}

export const [BreadcrumbContext, useBreadcrumb] = create<BreadcrumbContextType>({
  name: 'BreadcrumbContext',
  strict: true,
  errorMessage: 'useBreadcrumb: `context` is undefined. Seems you forgot to wrap component within <Breadcrumb.Root />',
})
