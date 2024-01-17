import type { UseTableProps } from '@/components/table/use-table.hook'
import type { TableProps as ComponentProps, SelectionMode } from 'react-aria-components'

import React from 'react'
import { Table as Component } from 'react-aria-components'

import TableBody from '@/components/table/TableBody'
import TableCell from '@/components/table/TableCell'
import TableColumn from '@/components/table/TableColumn'
import TableHead from '@/components/table/TableHead'
import TableRow from '@/components/table/TableRow'
import { TableProvider } from '@/components/table/use-table-context.hook'
import { useTable } from '@/components/table/use-table.hook'

export type TableProps = Omit<ComponentProps, 'selectionMode' | 'selectionBehavior'> &
  UseTableProps & {
    behavior?: 'toggle' | 'replace'
    mode?: SelectionMode
  }

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children, behavior, mode, size, sticky, striped, headingless, ...rest } = props

  const context = useTable({ size, sticky, striped, headingless })

  const getProps = React.useCallback(
    () => ({
      ref,
      selectionBehavior: behavior,
      selectionMode: mode,
      className: context.slots.table(),
      ...rest,
    }),
    [behavior, context.slots, mode, ref, rest]
  )

  return (
    <TableProvider value={context}>
      <Component {...getProps()}>{children}</Component>
    </TableProvider>
  )
})

Table.defaultProps = {
  behavior: undefined,
  mode: undefined,
}

export default Object.assign(Table, {
  Body: TableBody,
  Cell: TableCell,
  Column: TableColumn,
  Head: TableHead,
  Row: TableRow,
})
