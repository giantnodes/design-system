'use client'

import type { TableBodyProps } from 'react-aria-components'
import React from 'react'
import { TableBody } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTable } from '~/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'tbody'

type ComponentOwnProps<TData extends object> = TableBodyProps<TData>

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
    const { as, children, className, ...rest } = props

    const Element = as ?? TableBody

    const { slots } = useTable()

    const component = React.useMemo<TableBodyProps<TData>>(
      () => ({
        className: slots.tbody({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as TableBodyOwnProps, ComponentProps as TableBodyProps }
export default Component
