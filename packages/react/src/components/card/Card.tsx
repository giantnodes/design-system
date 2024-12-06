'use client'

import type { CardVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { CardContext, useCardValue } from '~/components/card/use-card.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = CardVariantProps

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
    const { as, children, className, size, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useCardValue({ size })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.card({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <CardContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </CardContext.Provider>
    )
  }
)

Component.displayName = 'Card.Root'

export type { ComponentOwnProps as CardOwnProps, ComponentProps as CardProps }
export default Component
