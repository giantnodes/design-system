'use client'

import type { TableVariantProps } from '@giantnodes/theme'
import type { CellProps } from 'react-aria-components'
import React from 'react'
import { Cell } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTable } from '~/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'td'

type ComponentOwnProps = CellProps & Pick<TableVariantProps, 'size'>

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
    const { as, children, className, size, ...rest } = props

    const Element = as ?? Cell

    const { slots } = useTable()

    const component = React.useMemo<CellProps>(
      () => ({
        className: slots.td({ className: className?.toString(), size }),
        ...rest,
      }),
      [className, rest, size, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Table.Cell'

export type { ComponentOwnProps as TableCellOwnProps, ComponentProps as TableCellProps }
export default Component
