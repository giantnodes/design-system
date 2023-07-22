import type { UseTableProps } from '@/components/table/use-table.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import TableBody from '@/components/table/TableBody'
import TableData from '@/components/table/TableData'
import TableHead from '@/components/table/TableHead'
import TableHeader from '@/components/table/TableHeader'
import TableRow from '@/components/table/TableRow'
import { TableProvider } from '@/components/table/use-table-context.hook'
import { useTable } from '@/components/table/use-table.hook'

export type TableProps = Component<'table'> & UseTableProps

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const context = useTable(props)
  const Component = as || 'table'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.table({
        class: className,
      }),
      ...rest,
    }),
    [ref, context.slots, className, rest]
  )

  return (
    <TableProvider value={context}>
      <div className={context.slots.base()}>
        <Component {...getProps()}>{children}</Component>
      </div>
    </TableProvider>
  )
})

Table.displayName = 'Table'

export default Object.assign(Table, {
  Body: TableBody,
  Data: TableData,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
})
