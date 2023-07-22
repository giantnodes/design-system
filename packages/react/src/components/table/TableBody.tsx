import type { Component } from '@/utilities/types'

import React from 'react'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableBodyProps = Component<'tbody'>

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useTableContext()

  const Component = as || 'tbody'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.tbody({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TableBody.displayName = 'Table.Body'

export default TableBody
