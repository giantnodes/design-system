import type { TableBodyProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { TableBody as Component } from 'react-aria-components'

import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableBodyProps<T extends object> = ComponentProps<T>

const TableBody: <T extends object>(props: TableBodyProps<T>) => React.ReactNode = (() =>
  React.forwardRef((props, ref: React.ForwardedRef<HTMLTableSectionElement>) => {
    const { children, className, ...rest } = props

    const { slots } = useTableContext()

    const getProps = React.useCallback(
      () => ({
        ref,
        className: slots.tbody(),
        ...rest,
      }),
      [ref, rest, slots]
    )

    return <Component {...getProps()}>{children}</Component>
  }))()

export default TableBody
