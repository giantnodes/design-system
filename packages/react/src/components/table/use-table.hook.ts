'use client'

import type { TableVariantProps } from '@giantnodes/theme'
import React from 'react'
import { table } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseTableProps = TableVariantProps

type TableContextType = ReturnType<typeof useTableValue>

export const useTableValue = (props: UseTableProps) => {
  const { size, sticky, striped, headingless } = props

  const slots = React.useMemo(() => table({ size, sticky, striped, headingless }), [size, sticky, striped, headingless])

  return {
    slots,
  }
}

export const [TableContext, useTable] = create<TableContextType>({
  name: 'TableContext',
  strict: true,
  errorMessage: 'useTable: `context` is undefined. Seems you forgot to wrap component within <Table.Root />',
})
