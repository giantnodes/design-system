import type { ComponentWithoutAs } from '@/utilities/types'

import React from 'react'

import { useInputContext } from '@/components/input/use-input.context.hook'

export type InputControlProps = ComponentWithoutAs<'input'>

const InputControl = React.forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
  const { className, disabled, onFocus, onBlur, ...rest } = props

  const { slots, isDisabled, setDisabled, setFocused } = useInputContext()
  const Component = 'input'

  const onInputFocus = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true)

      if (onFocus) onFocus(event)
    },
    [onFocus, setFocused]
  )

  const onInputBlur = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false)

      if (onBlur) onBlur(event)
    },
    [onBlur, setFocused]
  )

  React.useEffect(() => {
    setDisabled(disabled ?? false)
  }, [disabled, setDisabled])

  const getProps = React.useCallback(
    () => ({
      ref,
      disabled: isDisabled,
      className: slots.control({
        class: className,
      }),
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      ...rest,
    }),
    [ref, isDisabled, slots, className, onInputFocus, onInputBlur, rest]
  )

  return <Component {...getProps()} />
})

InputControl.displayName = 'Input.Control'

export default InputControl
