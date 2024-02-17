import type { UseCardProps } from '@/components/card/use-card.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import CardBody from '@/components/card/CardBody'
import CardFooter from '@/components/card/CardFooter'
import CardHeader from '@/components/card/CardHeader'
import { CardContext, useCard } from '@/components/card/use-card.hook'

export type CardProps = Component<'div'> & UseCardProps

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { as, children, className, transparent, ...rest } = props

  const Component = as || 'div'
  const context = useCard({ transparent })

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
    <CardContext.Provider value={context}>
      <Component {...getProps()}>{children}</Component>
    </CardContext.Provider>
  )
})

Card.displayName = 'Card'

export default Object.assign(Card, {
  Body: CardBody,
  Footer: CardFooter,
  Header: CardHeader,
})
