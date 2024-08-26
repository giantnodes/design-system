'use client'

import type { MenuItemProps } from 'react-aria-components'
import React from 'react'
import { MenuItem } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useMenu } from '~/components/menu/use-menu.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = MenuItemProps

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

    const Element = as ?? MenuItem

    const { slots } = useMenu()

    const component = React.useMemo<MenuItemProps>(
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

export type { ComponentOwnProps as MenuItemOwnProps, ComponentProps as MenuItemProps }
export default Component
