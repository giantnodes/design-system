'use client'

import type * as Polymophic from '@/utilities/polymorphic'
import type { ListBoxItemProps } from 'react-aria-components'

import React from 'react'
import { ListBoxItem } from 'react-aria-components'

import { useSelectContext } from './use-select.hook'

const __ELEMENT_TYPE__ = 'option'

type ComponentOwnProps = ListBoxItemProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? ListBoxItem

    const { slots } = useSelectContext()

    const component = React.useMemo<ListBoxItemProps>(
      () => ({
        className: slots.option({ className: className?.toString() }),
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

export type { ComponentOwnProps as SelectOptionOwnProps, ComponentProps as SelectOptionProps }
export default Component
