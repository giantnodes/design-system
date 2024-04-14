import type { UseDividerProps } from '@/components/divider/use-divider.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useDivider } from '@/components/divider/use-divider.hook'

export type DividerProps = Component<'hr'> & UseDividerProps

const Divider = React.forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  const { as, children, className, orientation, ...rest } = props

  const Component = as || 'hr'
  const { slots } = useDivider({ orientation })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.divider({ className }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component aria-orientation={orientation} data-orientation={orientation} {...getProps()}>
      {children}
    </Component>
  )
})

Divider.displayName = 'Divider'

export default Divider
