'use client'

import type * as Polymophic from '@/utilities/polymorphic'
import type { TableBodyProps } from 'react-aria-components'

import React from 'react'
import { TableBody } from 'react-aria-components'

import { useTableContext } from './use-table.hook'

const __ELEMENT_TYPE__ = 'tbody'

type ComponentOwnProps<TData extends object> = TableBodyProps<TData>

type ComponentProps<TData extends object, TElement extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps<TData>
>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TData, TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? TableBody

    const { slots } = useTableContext()

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
