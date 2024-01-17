import type { ColumnProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Column as Component } from 'react-aria-components'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableColumnProps = ComponentProps

const TableColumn = React.forwardRef<HTMLTableCellElement, TableColumnProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useTableContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.th(),
      ...rest,
    }),
    [ref, rest, slots]
  )

  return <Component {...getProps()}>{children}</Component>
})

export default TableColumn
