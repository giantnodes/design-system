import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationDividerProps = Component<'hr'>

const NavigationDivider = React.forwardRef<HTMLHRElement, NavigationDividerProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const Component = as || 'hr'
  const { slots } = useNavigationContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.divider({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

NavigationDivider.displayName = 'Navigation.Divider'

export default NavigationDivider
