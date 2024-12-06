'use client'

import type { TableHeaderProps } from 'react-aria-components'
import React from 'react'
import { Collection, TableHeader, useTableOptions } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import Checkbox from '~/components/checkbox/Checkbox'
import TableColumn from '~/components/table/TableColumn'
import { useTable } from '~/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'thead'

type ComponentOwnProps<TData extends object> = TableHeaderProps<TData>

type ComponentProps<TData extends object, TElement extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps<TData>
>

type ComponentType = <TData extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, columns, ...rest } = props

    const Element = as ?? TableHeader

    const { slots } = useTable()
    const { selectionBehavior, selectionMode, allowsDragging } = useTableOptions()

    const component = React.useMemo<TableHeaderProps<TData>>(
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

export type { ComponentOwnProps as TableHeadOwnProps, ComponentProps as TableHeadProps }
export default Component
