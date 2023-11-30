import type { BreadcrumbVariantProps } from '@giantnodes/theme'

import { breadcrumb } from '@giantnodes/theme'
import React from 'react'

export type UseBreadcrumbProps = BreadcrumbVariantProps & {
  separator?: React.ReactNode
}

export const useBreadcrumb = (props: UseBreadcrumbProps) => {
  const { size, disabled, separator = '/' } = props

  const slots = React.useMemo(() => breadcrumb({ size, disabled }), [size, disabled])

  return {
    slots,
    separator,
  }
}

export type UseBreadcrumbReturn = ReturnType<typeof useBreadcrumb>
