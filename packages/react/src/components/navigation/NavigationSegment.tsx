import type { UseNavigationProps } from '@/components/navigation/use-navigation.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation-context.hook'

export type NavigationSegmentProps = Component<'ul'> & UseNavigationProps

const NavigationSegment = React.forwardRef<HTMLUListElement, NavigationSegmentProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useNavigationContext()

  const Component = as || 'ul'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.segment({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component role="list" {...getProps()}>
      {children}
    </Component>
  )
})

NavigationSegment.displayName = 'Navigation.Segment'

export default NavigationSegment
