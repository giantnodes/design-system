import type { Component } from '@/utilities/types'

import React from 'react'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableDataProps = Component<'td'>

const TableData = React.forwardRef<HTMLTableCellElement, TableDataProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useTableContext()

  const Component = as || 'td'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.td({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TableData.displayName = 'Table.Data'

export default TableData
