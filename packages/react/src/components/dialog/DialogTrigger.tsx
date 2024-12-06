'use client'

import type { DialogVariantProps } from '@giantnodes/theme'
import type { DialogTriggerProps } from 'react-aria-components'
import React from 'react'
import { DialogTrigger } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = DialogTriggerProps & DialogVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentProps<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, _: Polymorphic.Ref<TElement>) => {
    const { as, children, ...component } = props

    const Element = as ?? DialogTrigger

    return <Element {...component}>{children}</Element>
  }
)

Component.displayName = 'Dialog.Trigger'

export type { ComponentOwnProps as DialogTriggerOwnProps, ComponentProps as DialogTriggerProps }
export default Component
