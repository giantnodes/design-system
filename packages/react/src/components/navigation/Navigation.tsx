'use client'

import type { NavigationVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { NavigationContext, useNavigationValue } from '~/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'nav'

type ComponentOwnProps = NavigationVariantProps

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
    const { as, children, className, orientation, position, size, variant, isBordered, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useNavigationValue({
      orientation,
      position,
      size,
      variant,
      isBordered,
    })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.navigation(),
        ...rest,
      }),
      [context.slots, rest]
    )

    return (
      <NavigationContext.Provider value={context}>
        <Element {...component} ref={ref}>
          <div className={context.slots.wrapper({ className })}>{children}</div>
        </Element>
      </NavigationContext.Provider>
    )
  }
)

Component.displayName = 'Navigation.Root'

export type { ComponentOwnProps as NavigationOwnProps, ComponentProps as NavigationProps }
export default Component
