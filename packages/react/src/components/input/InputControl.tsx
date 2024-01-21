import type { ComponentWithoutAs } from '@/utilities/types'
import type { InputProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Input as Component } from 'react-aria-components'

import { useInputContext } from '@/components/input/use-input.context.hook'

export type InputControlProps = ComponentWithoutAs<'input'> & ComponentProps

const InputControl = React.forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
  const { className, ...rest } = props

  const { slots } = useInputContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.control({ className }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()} />
})

InputControl.displayName = 'Input.Control'

export default InputControl
