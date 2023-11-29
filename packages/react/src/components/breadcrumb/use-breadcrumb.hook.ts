import type { BreadcrumbVariantProps } from '@giantnodes/theme'

import { breadcrumb } from '@giantnodes/theme'
import React from 'react'

export type UseBreadcrumbProps = BreadcrumbVariantProps & {
  separator?: React.ReactNode
}

export const useBreadcrumb = (props: UseBreadcrumbProps) => {
  const { size, underline, disabled, separator = '/' } = props

  const slots = React.useMemo(() => breadcrumb({ size, underline, disabled }), [size, underline, disabled])

  return {
    slots,
    separator,
  }
}

export type UseBreadcrumbReturn = ReturnType<typeof useBreadcrumb>
