import type { Component } from '@/utilities/types'

import React from 'react'

import { useCardContext } from '@/components/card/use-card-context.hook'

export type CardHeaderProps = Component<'div'>

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useCardContext()

  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.header({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

CardHeader.displayName = 'Card.Header'

export default CardHeader
