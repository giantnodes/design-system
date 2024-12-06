'use client'

import type { NavigationVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useNavigation } from '~/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'li'

type ComponentOwnProps = Pick<NavigationVariantProps, 'variant'> & {
  isSelected?: boolean
}

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
    const { as, children, className, variant, isSelected, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const { slots } = useNavigation()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.item({ className, variant, isSelected }),
        ...rest,
      }),
      [className, isSelected, rest, slots, variant]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Navigation.Item'

export type { ComponentOwnProps as NavigationItemOwnProps, ComponentProps as NavigationItemProps }
export default Component
