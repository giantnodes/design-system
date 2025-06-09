'use client'

import type { TreeItemContentProps } from 'react-aria-components'
import React from 'react'
import { TreeItemContent } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTree } from '~/components/tree/use-tree.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = TreeItemContentProps

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

    const Element = as ?? TreeItemContent

    const { slots } = useTree()

    const component = React.useMemo<Omit<TreeItemContentProps, 'children'>>(
      () => ({
        className: slots.content({ className: className }),
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

Component.displayName = 'Tree.ItemContent'

export type { ComponentOwnProps as TreeItemContentOwnProps, ComponentProps as TreeItemContentProps }
export default Component
