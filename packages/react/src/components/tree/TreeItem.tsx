'use client'

import type { TreeItemProps } from 'react-aria-components'
import React from 'react'
import { TreeItem } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTree } from '~/components/tree/use-tree.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = TreeItemProps<TData>

type ComponentProps<TData extends object, TElement extends React.ElementType> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps<TData>
>

type ComponentType = (<TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<
  React.ReactElement<ComponentOwnProps<object>>,
  ComponentOwnProps<object>
>(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? TreeItem

    const { slots } = useTree()

    const component = React.useMemo<Omit<TreeItemProps<TData>, 'children'>>(
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

Component.displayName = 'Tree.Item'

export type { ComponentOwnProps as TreeItemOwnProps, ComponentProps as TreeItemProps }
export default Component
