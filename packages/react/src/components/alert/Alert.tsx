'use client'

import type { AlertVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { AlertContext, useAlertValue } from '~/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = AlertVariantProps

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
    const { as, children, className, color, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAlertValue({ color })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.alert({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <AlertContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </AlertContext.Provider>
    )
  }
)

Component.displayName = 'Alert.Root'

export type { ComponentOwnProps as AlertOwnProps, ComponentProps as AlertProps }
export default Component
