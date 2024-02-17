import type { ComponentWithoutAs } from '@/utilities/types'
import type { InputProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Input as Component } from 'react-aria-components'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'
import { useInputContext } from '@/components/input/use-input.hook'

export type InputControlProps = ComponentWithoutAs<'input'> & ComponentProps

const InputControl = React.forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
  const { className, ...rest } = props

  const { slots } = useInputContext()
  const group = useFormGroupContext()

  const getProps = React.useCallback(
    () => ({
      ref: group?.ref ?? ref,
      name: group?.name,
      onChange: group?.onChange,
      onBlur: group?.onBlur,
      className: slots.control({ className }),
      ...group?.fieldProps,
      ...rest,
    }),
    [group?.ref, group?.name, group?.onChange, group?.onBlur, group?.fieldProps, ref, slots, className, rest]
  )

  return <Component {...getProps()} />
})

InputControl.displayName = 'Input.Control'

export default InputControl
