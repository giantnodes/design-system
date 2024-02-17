import type { UseTableProps } from '@/components/table/use-table.hook'
import type { TableProps as ComponentProps, SelectionMode } from 'react-aria-components'

import clsx from 'clsx'
import React from 'react'
import { Table as Component } from 'react-aria-components'

import TableBody from '@/components/table/TableBody'
import TableCell from '@/components/table/TableCell'
import TableColumn from '@/components/table/TableColumn'
import TableHead from '@/components/table/TableHead'
import TableRow from '@/components/table/TableRow'
import { TableContext, useTable } from '@/components/table/use-table.hook'

export type TableProps = Omit<ComponentProps, 'selectionMode' | 'selectionBehavior'> &
  UseTableProps & {
    behavior?: 'toggle' | 'replace'
    mode?: SelectionMode
  }

const Table = React.forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children, className, behavior, mode, size, sticky, striped, headingless, ...rest } = props

  const context = useTable({ size, sticky, striped, headingless })

  const getProps = React.useCallback(
    () => ({
      ref,
      selectionBehavior: behavior,
      selectionMode: mode,
      className: clsx(context.slots.table(), className),
      ...rest,
    }),
    [behavior, className, context.slots, mode, ref, rest]
  )

  return (
    <TableContext.Provider value={context}>
      <Component {...getProps()}>{children}</Component>
    </TableContext.Provider>
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
