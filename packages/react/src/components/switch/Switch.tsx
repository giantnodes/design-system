import type { UseSwitchProps } from '@/components/switch/use-switch.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { SwitchProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Switch as Component } from 'react-aria-components'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'
import { SwitchContext, useSwitch } from '@/components/switch/use-switch.hook'

export type SwitchProps = ComponentWithoutAs<'label'> & ComponentProps & UseSwitchProps

const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const { children, className, size, color, ...rest } = props

  const group = useFormGroupContext()

  const context = useSwitch({ size, color })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.label({ className }),
      name: group?.name,
      ...group?.fieldProps,
      ...rest,
    }),
    [className, context.slots, group?.fieldProps, group?.name, ref, rest]
  )

  return (
    <SwitchContext.Provider value={context}>
      <Component {...getProps()}>
        <div className={context.slots.wrapper()}>
          <span className={context.slots.circle()} />
        </div>

        {children}
      </Component>
    </SwitchContext.Provider>
  )
})

Switch.displayName = 'Switch'

export default Switch
