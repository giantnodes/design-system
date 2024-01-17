import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationContentProps = Component<'div'>

const NavigationContent = React.forwardRef<HTMLDivElement, NavigationContentProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const Component = as || 'div'
  const { slots } = useNavigationContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.content({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

NavigationContent.displayName = 'Navigation.Content'

export default NavigationContent
