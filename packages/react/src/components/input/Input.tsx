import type { Component } from '@/utilities/types'
import type { InputVariantProps } from '@giantnodes/design-system'

import React from 'react'

import InputAddon from '@/components/input/InputAddon'
import InputControl from '@/components/input/InputControl'
import { InputProvider } from '@/components/input/use-input.context.hook'
import { useInput } from '@/components/input/use-input.hook'

export type InputProps = Component<'div'> & InputVariantProps

const Input = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const context = useInput(props)
  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.input({
        class: className,
      }),
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
