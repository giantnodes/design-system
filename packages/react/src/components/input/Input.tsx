import type { UseInputProps } from '@/components/input/use-input.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import InputAddon from '@/components/input/InputAddon'
import InputControl from '@/components/input/InputControl'
import { InputContext, useInput } from '@/components/input/use-input.hook'

export type InputProps = Component<'div'> & UseInputProps

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { as, children, className, status, size, variant, transparent, ...rest } = props

  const Component = as || 'div'
  const context = useInput({ status, size, variant, transparent })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.input({ className }),
      ...rest,
    }),
    [ref, className, context.slots, rest]
  )

  return (
    <InputContext.Provider value={context}>
      <Component {...getProps()}>{children}</Component>
    </InputContext.Provider>
  )
})

Input.displayName = 'Input'

export default Object.assign(Input, {
  Addon: InputAddon,
  Control: InputControl,
})
