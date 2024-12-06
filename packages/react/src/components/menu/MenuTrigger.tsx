'use client'

import type { ButtonProps } from 'react-aria-components'
import React from 'react'
import { Button } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useMenu } from '~/components/menu/use-menu.hook'

const __ELEMENT_TYPE__ = 'button'

type ComponentOwnProps = ButtonProps

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

    const Element = as ?? Button

    const { slots } = useMenu()

    const component = React.useMemo<ButtonProps>(
      () => ({
        className: slots.trigger({ className: className?.toString() }),
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

Component.displayName = 'Menu.Trigger'

export type { ComponentOwnProps as MenuTriggerOwnProps, ComponentProps as MenuTriggerProps }
export default Component
