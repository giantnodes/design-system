'use client'

import type { ListBoxItemProps } from 'react-aria-components'
import React from 'react'
import { ListBoxItem } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useComboBox } from '~/components/combo-box/use-combo-box.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = ListBoxItemProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymophic.Ref<TElement>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? ListBoxItem

    const { slots } = useComboBox()

    const component = React.useMemo<ListBoxItemProps>(
      () => ({
        className: slots.item({ className: className?.toString() }),
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

export type { ComponentOwnProps as ComboBoxItemOwnProps, ComponentProps as ComboBoxItemProps }
export default Component
