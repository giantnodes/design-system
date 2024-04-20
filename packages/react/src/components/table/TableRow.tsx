import type * as Polymophic from '@/utilities/polymorphic'
import type { RowProps } from 'react-aria-components'

import React from 'react'
import { Button, Collection, Row, useTableOptions } from 'react-aria-components'

import Checkbox from '@/components/checkbox/Checkbox'
import TableCell from '@/components/table/TableCell'
import { useTableContext } from '@/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'tr'

type ComponentOwnProps<D extends object> = RowProps<D>

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

    const Element = as ?? Row

    const { slots } = useTableContext()
    const { selectionBehavior, allowsDragging } = useTableOptions()

    const component = React.useMemo<RowProps<D>>(
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

export type { ComponentOwnProps as TableRowProps }
export default Component
