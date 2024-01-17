import type { UseSwitchProps } from '@/components/switch/use-switch.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { SwitchProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Switch as Component } from 'react-aria-components'

import { useSwitch } from '@/components/switch/use-switch.hook'

export type SwitchProps = ComponentWithoutAs<'label'> & Omit<ComponentProps, 'onChange'> & UseSwitchProps

const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const { children, className, size, color, onChange, ...rest } = props

  const { slots } = useSwitch({ size, color })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.label({ className }),
      ...rest,
    }),
    [className, ref, rest, slots]
  )

  return (
    <Component {...getProps()}>
      <div className={slots.wrapper()}>
        <span className={slots.circle()} />
      </div>

      {children}
    </Component>
  )
})

Switch.displayName = 'Switch'

export default Switch
