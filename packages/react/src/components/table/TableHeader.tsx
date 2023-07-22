import type { Component } from '@/utilities/types'

import React from 'react'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableHeaderProps = Component<'th'>

const TableHeader = React.forwardRef<HTMLTableCellElement, TableHeaderProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useTableContext()

  const Component = as || 'th'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.th({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component scope="col" {...getProps()}>
      {children}
    </Component>
  )
})

TableHeader.displayName = 'Table.Header'

export default TableHeader
