import type * as Polymophic from '@/utilities/polymorphic'
import type { TableHeaderProps } from 'react-aria-components'

import React from 'react'
import { Collection, TableHeader, useTableOptions } from 'react-aria-components'

import Checkbox from '@/components/checkbox/Checkbox'
import TableColumn from '@/components/table/TableColumn'
import { useTableContext } from '@/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'thead'

type ComponentOwnProps<D extends object> = TableHeaderProps<D>

type ComponentProps<D extends object, T extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  T,
  ComponentOwnProps<D>
>

type ComponentType = <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<D, T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<D, T>,
    ref: Polymophic.Ref<T>
  ) => {
    const { as, children, className, columns, ...rest } = props

    const Element = as ?? TableHeader

    const { slots } = useTableContext()
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

    const component = React.useMemo<TableHeaderProps<D>>(
      () => ({
        className: slots.thead({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {allowsDragging && <TableColumn />}

        {selectionBehavior === 'toggle' && (
          <TableColumn className="w-0">{selectionMode === 'multiple' && <Checkbox slot="selection" />}</TableColumn>
        )}

        <Collection items={columns}>{children}</Collection>
      </Element>
    )
  }
)

export type { ComponentOwnProps as TableHeadProps }
export default Component
