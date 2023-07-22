import type { Component } from '@/utilities/types'

import React from 'react'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableHeadProps = Component<'thead'>

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useTableContext()

  const Component = as || 'thead'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.thead({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TableHead.displayName = 'Table.Header'

export default TableHead
