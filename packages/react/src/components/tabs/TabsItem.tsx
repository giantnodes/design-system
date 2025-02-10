'use client'

import type { TabProps } from 'react-aria-components'
import React from 'react'
import { Tab } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTabs } from '~/components/tabs/use-tabs.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = TabProps

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
    const { as, children, className, ...rest } = props

    const Element = as ?? Tab

    const { slots } = useTabs()

    const component = React.useMemo<TabProps>(
      () => ({
        className: slots.item({ className: className?.toString() }),
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

Component.displayName = 'Tabs.Item'

export type { ComponentOwnProps as TabsItemOwnProps, ComponentProps as TabsItemProps }
export default Component
