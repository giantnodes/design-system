import type { Component } from '@/utilities/types'

import React from 'react'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableRowProps = Component<'tr'>

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useTableContext()

  const Component = as || 'tr'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.tr({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TableRow.displayName = 'Table.Row'

export default TableRow
