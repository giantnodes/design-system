'use client'

import type { TreeVariantProps } from '@giantnodes/theme'
import type { TreeProps } from 'react-aria-components'
import React from 'react'
import { Tree } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { TreeContext, useTreeValue } from '~/components/tree/use-tree.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = TreeProps<TData> & TreeVariantProps

type ComponentProps<TData extends object, TElement extends React.ElementType> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps<TData>
>

type ComponentType = (<TData extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, T>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Tree

    const context = useTreeValue({})

    const component = React.useMemo<TreeProps<TData>>(
      () => ({
        className: context.slots.root({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, context.slots]
    )

    return (
      <TreeContext value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </TreeContext>
    )
  }
)

Component.displayName = 'Tree.Root'

export type { ComponentOwnProps as TreeOwnProps, ComponentProps as TreeProps }
export default Component
