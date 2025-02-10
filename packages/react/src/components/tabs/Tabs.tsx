'use client'

import type { TabsVariantProps } from '@giantnodes/theme'
import type { TabsProps } from 'react-aria-components'
import React from 'react'
import { Tabs } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { TabsContext, useTabsValue } from '~/components/tabs/use-tabs.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = TabsProps & TabsVariantProps

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
    const { as, children, className, color, orientation, size, variant, ...rest } = props

    const Element = as ?? Tabs

    const context = useTabsValue({ color, orientation, size, variant })

    const component = React.useMemo<TabsProps>(
      () => ({
        className: context.slots.root({ className: className?.toString() }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <TabsContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </TabsContext.Provider>
    )
  }
)

Component.displayName = 'Tabs.Root'

export type { ComponentOwnProps as TabsOwnProps, ComponentProps as TabsProps }
export default Component
