import type { UseCheckboxProps } from '@/components/checkbox/use-checkbox.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { CheckboxProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Checkbox as Component } from 'react-aria-components'

import { useCheckbox } from '@/components/checkbox/use-checkbox.hook'

export type CheckboxProps = ComponentWithoutAs<'label'> & ComponentProps & UseCheckboxProps

const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const { children, className, size, ...rest } = props

  const { slots } = useCheckbox({ size })

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
      <svg
        aria-hidden="true"
        className={slots.icon()}
        fill="none"
        height="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>

      {children}
    </Component>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
