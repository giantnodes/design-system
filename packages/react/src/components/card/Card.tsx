import type { UseCardProps } from '@/components/card/use-card.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import CardBody from '@/components/card/CardBody'
import CardFooter from '@/components/card/CardFooter'
import CardHeader from '@/components/card/CardHeader'
import { CardProvider } from '@/components/card/use-card-context.hook'
import { useCard } from '@/components/card/use-card.hook'

export type CardProps = Component<'div'> & UseCardProps

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const context = useCard(props)
  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, context.slots, className, rest]
  )

  return (
    <CardProvider value={context}>
      <Component {...getProps()}>{children}</Component>
    </CardProvider>
  )
})

Card.displayName = 'Card'

export default Object.assign(Card, {
  Body: CardBody,
  Footer: CardFooter,
  Header: CardHeader,
})