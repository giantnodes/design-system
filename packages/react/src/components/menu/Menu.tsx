import type * as Polymophic from '@/utilities/polymorphic'
import type { MenuVariantProps } from '@giantnodes/theme'
import type { MenuTriggerProps } from 'react-aria-components'

import React from 'react'
import { MenuTrigger } from 'react-aria-components'

import MenuItem from '@/components/menu/MenuItem'
import MenuList from '@/components/menu/MenuList'
import MenuPopover from '@/components/menu/MenuPopover'
import { MenuContext, useMenu } from '@/components/menu/use-menu.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = MenuTriggerProps & MenuVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>) => {
    const { as, children, className, size, status, variant, ...rest } = props

    const Element = as ?? MenuTrigger

    const context = useMenu({ size, status, variant })

    const component = React.useMemo<MenuTriggerProps>(
      () => ({
        className: context.slots.menu({ className }),
        ...rest,
      }),
      [className, context.slots, rest]
    )

    return (
      <MenuContext.Provider value={context}>
        <Element {...component}>{children}</Element>
      </MenuContext.Provider>
    )
  }
)

export type { ComponentOwnProps as MenuProps }
export default Object.assign(Component, {
  Popover: MenuPopover,
  List: MenuList,
  Item: MenuItem,
})
