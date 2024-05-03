import type * as Polymophic from '@/utilities/polymorphic'
import type { CardVariantProps } from '@giantnodes/theme'

import React from 'react'

import CardBody from '@/components/card/CardBody'
import CardFooter from '@/components/card/CardFooter'
import CardHeader from '@/components/card/CardHeader'
import { CardContext, useCard } from '@/components/card/use-card.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = CardVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useCard()

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

export type { ComponentOwnProps as CardProps }
export default Object.assign(Component, {
  Body: CardBody,
  Footer: CardFooter,
  Header: CardHeader,
})
