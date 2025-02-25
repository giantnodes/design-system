'use client'

import type { MenuProps } from 'react-aria-components'
import React from 'react'
import { Menu } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useMenu } from '~/components/menu/use-menu.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = MenuProps<TData>

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

    const Element = as ?? Menu

    const { slots } = useMenu()

    const component = React.useMemo<MenuProps<TData>>(
      () => ({
        className: slots.list({ className: className?.toString() }),
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

Component.displayName = 'Menu.List'

export type { ComponentOwnProps as MenuListOwnProps, ComponentProps as MenuListProps }
export default Component
