import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationTriggerProps = Component<'button'> & UseNavigationProps

const NavigationTrigger = React.forwardRef<HTMLButtonElement, NavigationTriggerProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavigationContext()

  const Component = as || 'button'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.trigger({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component role="button" {...getProps()}>
      {children}
    </Component>
  )
})

NavigationTrigger.displayName = 'Navigation.Trigger'

export default NavigationTrigger
