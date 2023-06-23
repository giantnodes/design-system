import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import NavigationBrand from '@/components/navigation/NavigationBrand'
import NavigationContent from '@/components/navigation/NavigationContent'
import NavigationItem from '@/components/navigation/NavigationItem'
import NavigationLink from '@/components/navigation/NavigationLink'
import NavigationPortal from '@/components/navigation/NavigationPortal'
import NavigationSegment from '@/components/navigation/NavigationSegment'
import { NavigationProvider } from '@/components/navigation/use-navigation-context.hook'
import { useNavigation } from '@/components/navigation/use-navigation.hook'

export type NavigationProps = Component<'nav'> & UseNavigationProps

const Navigation = React.forwardRef<HTMLElement, NavigationProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const context = useNavigation(props)
  const Component = as || 'nav'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, context.slots, className, rest]
  )

  return (
    <NavigationProvider value={context}>
      <Component {...getProps()}>
        <div className={context.slots.wrapper()}>{children}</div>
      </Component>
    </NavigationProvider>
  )
})

Navigation.displayName = 'Navigation'

export default Object.assign(Navigation, {
  Brand: NavigationBrand,
  Content: NavigationContent,
  Item: NavigationItem,
  Link: NavigationLink,
  Portal: NavigationPortal,
  Segment: NavigationSegment,
})
