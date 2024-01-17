import type { TableVariantProps } from '@giantnodes/theme'

import { table } from '@giantnodes/theme'
import React from 'react'

export type UseTableProps = TableVariantProps

export const useTable = (props: UseTableProps) => {
  const { size, sticky, striped, headingless } = props

  const slots = React.useMemo(() => table({ size, sticky, striped, headingless }), [size, sticky, striped, headingless])

  return {
    slots,
  }
}

export type UseTableReturn = ReturnType<typeof useTable>
