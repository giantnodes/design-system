'use client'

import type { UseTableReturn } from '@/components/table/use-table.hook'

import { createContext } from '@/utilities/context'

export const [TableProvider, useTableContext] = createContext<UseTableReturn>({
  name: 'TableContext',
  strict: true,
  errorMessage: 'useTableContext: `context` is undefined. Seems you forgot to wrap component within <Table />',
})
