import type { TableVariantProps } from '@giantnodes/theme'

import { table } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

type UseTableProps = TableVariantProps

type UseTableReturn = ReturnType<typeof useTable>

export const useTable = (props: UseTableProps) => {
  const { size, sticky, striped, headingless } = props

  const slots = React.useMemo(() => table({ size, sticky, striped, headingless }), [size, sticky, striped, headingless])

  return {
    slots,
  }
}

export const [TableContext, useTableContext] = createContext<UseTableReturn>({
  name: 'TableContext',
  strict: true,
  errorMessage: 'useTableContext: `context` is undefined. Seems you forgot to wrap component within <Table />',
})
