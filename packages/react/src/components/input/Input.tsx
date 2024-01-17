import type { UseInputProps } from '@/components/input/use-input.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { TextFieldProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { TextField as Component } from 'react-aria-components'

import InputAddon from '@/components/input/InputAddon'
import InputControl from '@/components/input/InputControl'
import { InputProvider } from '@/components/input/use-input.context.hook'
import { useInput } from '@/components/input/use-input.hook'

export type InputProps = ComponentWithoutAs<'div'> & ComponentProps & UseInputProps

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { children, className, status, size, variant, ...rest } = props

  const context = useInput({ status, size, variant })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.input({ className }),
      ...rest,
    }),
    [className, context.slots, ref, rest]
  )

  return (
    <InputProvider value={context}>
      <Component {...getProps()}>{children}</Component>
    </InputProvider>
  )
})

Input.displayName = 'Input'

export default Object.assign(Input, {
  Addon: InputAddon,
  Control: InputControl,
})
