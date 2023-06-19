import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import { Portal } from '@ariakit/react'
import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationPortalProps = Component<typeof Portal> & UseNavigationProps

const NavigationPortal = React.forwardRef<typeof Portal, NavigationPortalProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavigationContext()

  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.viewport({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Portal as={Component} {...getProps()}>
      {children}
    </Portal>
  )
})

NavigationPortal.displayName = 'Navigation.Portal'

export default NavigationPortal
