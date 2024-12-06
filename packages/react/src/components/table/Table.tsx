'use client'

import type { TableVariantProps } from '@giantnodes/theme'
import type { TableProps } from 'react-aria-components'
import React from 'react'
import { Table } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { TableContext, useTableValue } from '~/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'table'

type ComponentOwnProps = Omit<TableProps, 'selectionMode' | 'selectionBehavior'> &
  TableVariantProps & {
    behavior?: 'toggle' | 'replace'
    mode?: 'none' | 'single' | 'multiple'
  }

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, behavior, mode, size, sticky, striped, headingless, ...rest } = props

    const Element = as ?? Table

    const context = useTableValue({ size, sticky, striped, headingless })

    const component = React.useMemo<TableProps>(
      () => ({
        selectionBehavior: behavior,
        selectionMode: mode,
        className: context.slots.table({ className: className?.toString() }),
        ...rest,
      }),
      [behavior, className, context.slots, mode, rest]
    )

    return (
      <TableContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </TableContext.Provider>
    )
  }
)

Component.displayName = 'Table.Root'

export type { ComponentOwnProps as TableOwnProps, ComponentProps as TableProps }
export default Component
