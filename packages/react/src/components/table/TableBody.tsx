import type * as Polymophic from '@/utilities/polymorphic'
import type { TableBodyProps } from 'react-aria-components'

import React from 'react'
import { TableBody } from 'react-aria-components'

import { useTableContext } from './use-table.hook'

const __ELEMENT_TYPE__ = 'tbody'

type ComponentOwnProps<D extends object> = TableBodyProps<D>

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
    const { as, children, className, ...rest } = props

    const Element = as ?? TableBody

    const { slots } = useTableContext()

    const component = React.useMemo<TableBodyProps<D>>(
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

export type { ComponentOwnProps as TableBodyProps }
export default Component
