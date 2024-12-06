'use client'

import type { DialogVariantProps } from '@giantnodes/theme'
import type { DialogTriggerProps } from 'react-aria-components'
import React from 'react'
import { DialogTrigger } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = DialogTriggerProps & DialogVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentProps<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = <TElement extends React.ElementType>(props: ComponentProps<TElement>) => {
  const { as, children, ...component } = props

  const Element = as ?? DialogTrigger

  return <Element {...component}>{children}</Element>
}

export type { ComponentOwnProps as DialogTriggerOwnProps, ComponentProps as DialogTriggerProps }
export default Component
