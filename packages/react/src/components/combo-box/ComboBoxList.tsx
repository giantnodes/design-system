'use client'

import type { ListBoxProps } from 'react-aria-components'
import React from 'react'
import { ListBox } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useComboBox } from '~/components/combo-box/use-combo-box.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = ListBoxProps<TData>

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymorphic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <D extends object, TElement extends React.ElementType>(
    props: ComponentProps<D, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? ListBox

    const { slots } = useComboBox()

    const component = React.useMemo<ListBoxProps<D>>(
      () => ({
        className: slots.list({ className: className?.toString() }),
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

export type { ComponentOwnProps as ComboBoxListOwnProps, ComponentProps as ComboBoxListProps }
export default Component
