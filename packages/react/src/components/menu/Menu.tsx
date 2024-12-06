'use client'

import type { MenuVariantProps } from '@giantnodes/theme'
import type { MenuTriggerProps } from 'react-aria-components'
import React from 'react'
import { MenuTrigger } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { MenuContext, useMenuValue } from '~/components/menu/use-menu.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = MenuTriggerProps & MenuVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentProps<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = <TElement extends React.ElementType>(props: ComponentProps<TElement>) => {
  const { as, children, className, size, color, ...rest } = props

  const Element = as ?? MenuTrigger

  const context = useMenuValue({ size, color })

  const component = React.useMemo<Omit<MenuTriggerProps, 'children'>>(
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

export type { ComponentOwnProps as MenuOwnProps, ComponentProps as MenuProps }
export default Component
