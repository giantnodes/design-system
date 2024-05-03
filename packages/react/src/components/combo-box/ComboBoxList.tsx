import type * as Polymophic from '@/utilities/polymorphic'
import type { ListBoxProps } from 'react-aria-components'

import React from 'react'
import { ListBox } from 'react-aria-components'

import { useComboBoxContext } from '@/components/combo-box/use-combo-box.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = ListBoxProps<TData>

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymophic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <D extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<D, TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as || ListBox

    const { slots } = useComboBoxContext()

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
