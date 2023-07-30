import type { Component } from '@/utilities/types'

import React from 'react'

import { useCardContext } from '@/components/card/use-card-context.hook'

export type CardFooterProps = Component<'div'>

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useCardContext()

  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.footer({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

CardFooter.displayName = 'Card.Footer'

export default CardFooter
