import type { UseButtonProps } from '@/components/button/use-button.hook'
import type { ButtonProps } from 'react-aria-components'

import React from 'react'
import { Button } from 'react-aria-components'

import { useButton } from '@/components/button/use-button.hook'
import Spinner from '@/components/spinner/Spinner'

export type ComponentProps = UseButtonProps

const Component = React.forwardRef<HTMLButtonElement, ComponentProps>((props, ref) => {
  const { as, children, className, isLoading, color, shape, size, variant, ...rest } = props

  const Element = as || Button

  const { isDisabled, slots } = useButton({ color, shape, size, variant, isLoading, ...rest })

  const component = React.useMemo<ButtonProps>(
    () => ({
      ref,
      'data-loading': isLoading,
      isDisabled,
      className: slots.button({ className }),
      ...rest,
    }),
    [ref, isLoading, isDisabled, slots, className, rest]
  )

  return (
    <Element {...component}>
      {isLoading && <Spinner />}
      {children}
    </Element>
  )
})

Component.displayName = 'Button'

export { ComponentProps as ButtonProps }
export default Component
