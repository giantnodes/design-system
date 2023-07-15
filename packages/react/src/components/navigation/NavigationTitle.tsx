import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationTitleProps = Component<'h2'> & UseNavigationProps

const NavigationTitle = React.forwardRef<HTMLHeadingElement, NavigationTitleProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavigationContext()

  const Component = as || 'h2'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.title({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

NavigationTitle.displayName = 'Navigation.Title'

export default NavigationTitle
