'use client'

import type { TableVariantProps } from '@giantnodes/theme'
import type { ColumnProps } from 'react-aria-components'
import React from 'react'
import { Column } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTable } from '~/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'th'

type ComponentOwnProps = ColumnProps & Pick<TableVariantProps, 'size'>

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

    const Element = as ?? Column

    const { slots } = useTable()

    const component = React.useMemo<ColumnProps>(
      () => ({
        className: slots.th({ className: className?.toString(), size }),
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

Component.displayName = 'Table.Column'

export type { ComponentOwnProps as TableColumnOwnProps, ComponentProps as TableColumnProps }
export default Component
