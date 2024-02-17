import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation.hook'

export type NavigationPortalProps = Component<'div'> & UseNavigationProps

const NavigationPortal = React.forwardRef<HTMLDivElement, NavigationPortalProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const Component = as || 'div'
  const { slots } = useNavigationContext()

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

  return <Component {...getProps()}>{children}</Component>
})

NavigationPortal.displayName = 'Navigation.Portal'

export default NavigationPortal
