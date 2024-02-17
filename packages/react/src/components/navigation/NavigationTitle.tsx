import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation.hook'

export type NavigationTitleProps = Component<'span'> & UseNavigationProps

const NavigationTitle = React.forwardRef<HTMLSpanElement, NavigationTitleProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const Component = as || 'span'
  const { slots } = useNavigationContext()

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
