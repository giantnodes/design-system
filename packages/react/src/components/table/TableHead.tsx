import type { TableHeaderProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Collection, TableHeader as Component, useTableOptions } from 'react-aria-components'

import Checkbox from '@/components/checkbox/Checkbox'
import TableColumn from '@/components/table/TableColumn'
import { useTableContext } from '@/components/table/use-table-context.hook'

export type TableHeadProps<T extends object> = ComponentProps<T>

const TableHead: <T extends object>(props: TableHeadProps<T>) => React.ReactNode = (() =>
  React.forwardRef((props, ref: React.ForwardedRef<HTMLTableSectionElement>) => {
    const { children, className, columns, ...rest } = props

    const { slots } = useTableContext()
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

    const getProps = React.useCallback(
      () => ({
        ref,
        className: slots.thead({ className }),
        ...rest,
      }),
      [className, ref, rest, slots]
    )

    return (
      <Component {...getProps()}>
        {allowsDragging && <TableColumn />}

        {selectionBehavior === 'toggle' && (
          <TableColumn className="w-0">{selectionMode === 'multiple' && <Checkbox slot="selection" />}</TableColumn>
        )}

        <Collection items={columns}>{children}</Collection>
      </Component>
    )
  }))()

export default TableHead
