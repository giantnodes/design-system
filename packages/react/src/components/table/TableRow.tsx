'use client'

import type { RowProps } from 'react-aria-components'
import React from 'react'
import { Button, Collection, Row, useTableOptions } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import Checkbox from '~/components/checkbox/Checkbox'
import TableCell from '~/components/table/TableCell'
import { useTable } from '~/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'tr'

type ComponentOwnProps<TData extends object> = RowProps<TData>

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymorphic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const { as, children, className, columns, ...rest } = props

    const Element = as ?? Row

    const { slots } = useTable()
    const { selectionBehavior, allowsDragging } = useTableOptions()

    const component = React.useMemo<RowProps<TData>>(
      () => ({
        className: slots.tr({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {allowsDragging && (
          <TableCell>
            <Button slot="drag">≡</Button>
          </TableCell>
        )}

        {selectionBehavior === 'toggle' && (
          <TableCell>
            <Checkbox slot="selection" />
          </TableCell>
        )}

        <Collection items={columns}>{children}</Collection>
      </Element>
    )
  }
)

export type { ComponentOwnProps as TableRowOwnProps, ComponentProps as TableRowProps }
export default Component
