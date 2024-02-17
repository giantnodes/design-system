import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import NavigationBrand from '@/components/navigation/NavigationBrand'
import NavigationContent from '@/components/navigation/NavigationContent'
import NavigationDivider from '@/components/navigation/NavigationDivider'
import NavigationItem from '@/components/navigation/NavigationItem'
import NavigationLink from '@/components/navigation/NavigationLink'
import NavigationPortal from '@/components/navigation/NavigationPortal'
import NavigationSegment from '@/components/navigation/NavigationSegment'
import NavigationTitle from '@/components/navigation/NavigationTitle'
import NavigationTrigger from '@/components/navigation/NavigationTrigger'
import { NavigationContext, useNavigation } from '@/components/navigation/use-navigation.hook'

export type NavigationProps = Component<'nav'> & UseNavigationProps

const Navigation = React.forwardRef<HTMLElement, NavigationProps>((props, ref) => {
  const { as, children, className, position, size, orientation, variant, ...rest } = props

  const Component = as || 'nav'
  const context = useNavigation({ position, size, orientation, variant })

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
    <NavigationContext.Provider value={context}>
      <Component {...getProps()}>
        <div className={context.slots.wrapper()}>{children}</div>
      </Component>
    </NavigationContext.Provider>
  )
})

Navigation.displayName = 'Navigation'

export default Object.assign(Navigation, {
  Brand: NavigationBrand,
  Content: NavigationContent,
  Divider: NavigationDivider,
  Item: NavigationItem,
  Link: NavigationLink,
  Portal: NavigationPortal,
  Segment: NavigationSegment,
  Title: NavigationTitle,
  Trigger: NavigationTrigger,
})
