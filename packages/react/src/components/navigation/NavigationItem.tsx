import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationItemProps = Component<'li'> & UseNavigationProps

const NavigationItem = React.forwardRef<HTMLLIElement, NavigationItemProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavigationContext()

  const Component = as || 'li'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.item({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component role="listitem" {...getProps()}>
      {children}
    </Component>
  )
})

NavigationItem.displayName = 'Navigation.Item'

export default NavigationItem
