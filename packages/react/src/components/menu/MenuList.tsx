import type * as Polymophic from '@/utilities/polymorphic'
import type { MenuProps } from 'react-aria-components'

import React from 'react'
import { Menu } from 'react-aria-components'

import { useMenuContext } from '@/components/menu/use-menu.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<D extends object> = MenuProps<D>

type ComponentProps<D extends object, T extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  T,
  ComponentOwnProps<D>
>

type ComponentType = <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<D, T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<D, T>,
    ref: Polymophic.Ref<T>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Menu

    const { slots } = useMenuContext()

    const component = React.useMemo<MenuProps<D>>(
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

export type { ComponentOwnProps as MenuListProps }
export default Component
