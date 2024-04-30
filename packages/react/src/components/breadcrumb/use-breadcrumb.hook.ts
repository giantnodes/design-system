import type { BreadcrumbVariantProps } from '@giantnodes/theme'

import { breadcrumb } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

type UseBreadcrumbProps = {
  separator?: React.ReactNode
} & BreadcrumbVariantProps

type UseBreadcrumbReturn = ReturnType<typeof useBreadcrumb>

export const useBreadcrumb = (props: UseBreadcrumbProps) => {
  const { size, separator = '/' } = props

  const slots = React.useMemo(() => breadcrumb({ size }), [size])

  return {
    slots,
    separator,
  }
}

export const [BreadcrumbContext, useBreadcrumbContext] = createContext<UseBreadcrumbReturn>({
  name: 'BreadcrumbContext',
  strict: true,
  errorMessage:
    'useBreadcrumbContext: `context` is undefined. Seems you forgot to wrap component within <Breadcrumb />',
})
