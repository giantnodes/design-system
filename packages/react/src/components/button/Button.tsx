import type { UseButtonProps } from '@/components/button/use-button.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { ButtonProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Button as Component } from 'react-aria-components'

import { useButton } from '@/components/button/use-button.hook'

export type ButtonProps = ComponentWithoutAs<'button'> & ComponentProps & UseButtonProps

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, color, shape, size, variant, ...rest } = props

  const { slots } = useButton({ color, shape, size, variant })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.button({ className }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

Button.displayName = 'Button'

export default Button
