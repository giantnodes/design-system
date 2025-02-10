'use client'

import type { TabListProps } from 'react-aria-components'
import React from 'react'
import { TabList } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTabs } from '~/components/tabs/use-tabs.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = TabListProps<TData>

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymorphic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = (<TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? TabList

    const { slots } = useTabs()

    const component = React.useMemo<TabListProps<TData>>(
      () => ({
        className: slots.list({ className: className?.toString() }),
        ...rest,
      }),
      [slots, className, rest]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Tabs.List'

export type { ComponentOwnProps as TabsListOwnProps, ComponentProps as TabsListProps }
export default Component
