import type * as Polymophic from '@/utilities/polymorphic'

import React from 'react'

import { useNavigationContext } from '@/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'ul'

type ComponentOwnProps = {}

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const { slots } = useNavigationContext()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.segment({ className }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as NavigationSegmentProps }
export default Component
