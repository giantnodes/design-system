'use client'

import type { TooltipVariantProps } from '@giantnodes/theme'
import type { TooltipTriggerComponentProps } from 'react-aria-components'
import React from 'react'
import { TooltipTrigger } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { TooltipContext, useTooltipValue } from '~/components/tooltip/use-tooltip.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = TooltipVariantProps & TooltipTriggerComponentProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentProps<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = <TElement extends React.ElementType>(props: ComponentProps<TElement>) => {
  const { as, children, className, ...rest } = props

  const Element = as ?? TooltipTrigger

  const context = useTooltipValue({})

  const component = React.useMemo<Omit<TooltipTriggerComponentProps, 'children'>>(
    () => ({
      className: context.slots.root({ className: cn(className) }),
      ...rest,
    }),
    [className, context.slots, rest]
  )

  return (
    <TooltipContext.Provider value={context}>
      <Element {...component}>{children}</Element>
    </TooltipContext.Provider>
  )
}

export type { ComponentOwnProps as TooltipOwnProps, ComponentProps as TooltipProps }
export default Component
