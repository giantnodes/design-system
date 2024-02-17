import type { RowProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Collection, Row as Component, useTableOptions } from 'react-aria-components'

import Button from '@/components/button/Button'
import Checkbox from '@/components/checkbox/Checkbox'
import TableCell from '@/components/table/TableCell'
import { useTableContext } from '@/components/table/use-table.hook'

export type TableRowProps<T extends object> = ComponentProps<T>

const TableRow: <T extends object>(props: TableRowProps<T>) => React.ReactNode = (() =>
  React.forwardRef((props, ref: React.ForwardedRef<HTMLTableRowElement>) => {
    const { children, className, columns, ...rest } = props

    const { slots } = useTableContext()
    const { selectionBehavior, allowsDragging } = useTableOptions()

    const getProps = React.useCallback(
      () => ({
        ref,
        className: slots.tr(),
        ...rest,
      }),
      [ref, rest, slots]
    )

    return (
      <Component {...getProps()}>
        {allowsDragging && (
          <TableCell>
            <Button slot="drag">≡</Button>
          </TableCell>
        )}

        {selectionBehavior === 'toggle' && (
          <TableCell>
            <Checkbox slot="selection" />
          </TableCell>
        )}

        <Collection items={columns}>{children}</Collection>
      </Component>
    )
  }))()

export default TableRow
