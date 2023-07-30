import type { Component } from '@/utilities/types'

import React from 'react'

import { useCardContext } from '@/components/card/use-card-context.hook'

export type CardBodyProps = Component<'div'>

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useCardContext()

  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.body({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

CardBody.displayName = 'Card.Body'

export default CardBody
