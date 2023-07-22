import type { UseButtonProps } from '@/components/button/use-button.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useButton } from '@/components/button/use-button.hook'

export type ButtonProps = Component<'button'> & UseButtonProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useButton(props)

  const Component = as || 'button'

  const getBadgeProps = React.useCallback(
    () => ({
      ref,
      className: slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component type="button" {...getBadgeProps()}>
      {children}
    </Component>
  )
})

Button.displayName = 'Button'

export default Object.assign(Button, {})
