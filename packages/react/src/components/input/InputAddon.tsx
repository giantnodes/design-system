import type { Component } from '@/utilities/types'

import React from 'react'

import { useInputContext } from '@/components/input/use-input.context.hook'

export type InputAddonProps = Component<'div'>

const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const Component = as || 'div'
  const { slots } = useInputContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.addon({
        class: className,
      }),
      ...rest,
    }),
    [className, slots, ref, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

InputAddon.displayName = 'Input.Addon'

export default InputAddon
