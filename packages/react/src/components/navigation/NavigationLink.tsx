import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationLinkProps = Component<'a'> & UseNavigationProps

const NavigationLink = React.forwardRef<HTMLAnchorElement, NavigationLinkProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavigationContext()

  const Component = as || 'a'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.link({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

NavigationLink.displayName = 'Navigation.Link'

export default NavigationLink
