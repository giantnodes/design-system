import type { CellProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Cell as Component } from 'react-aria-components'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableCellProps = ComponentProps

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useTableContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.td(),
      ...rest,
    }),
    [ref, rest, slots]
  )

  return <Component {...getProps()}>{children}</Component>
})

export default TableCell
