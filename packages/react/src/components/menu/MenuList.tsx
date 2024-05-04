import type * as Polymophic from '@/utilities/polymorphic'
import type { MenuProps } from 'react-aria-components'

import React from 'react'
import { Menu } from 'react-aria-components'

import { useMenuContext } from '@/components/menu/use-menu.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = MenuProps<TData>

type ComponentProps<TData extends object, TElement extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps<TData>
>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TData, TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Menu

    const { slots } = useMenuContext()

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

export type { ComponentOwnProps as MenuListOwnProps, ComponentProps as MenuListProps }
export default Component
