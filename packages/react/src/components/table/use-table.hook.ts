import type { TableVariantProps } from '@giantnodes/theme'

import { table } from '@giantnodes/theme'
import React from 'react'

export type UseTableProps = TableVariantProps

export const useTable = (props: UseTableProps) => {
  const { size, sticky, striped } = props
  const slots = React.useMemo(() => table({ size, sticky, striped }), [size, sticky, striped])

  return {
    slots,
  }
}

export type UseTableReturn = ReturnType<typeof useTable>
