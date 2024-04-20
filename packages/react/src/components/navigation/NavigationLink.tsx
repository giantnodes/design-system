import type * as Polymophic from '@/utilities/polymorphic'
import type { LinkProps } from 'react-aria-components'

import React from 'react'
import { Link } from 'react-aria-components'

import { useNavigationContext } from '@/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'a'

type ComponentOwnProps = LinkProps & {
  isSelected?: boolean
}

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, isSelected, ...rest } = props

    const Element = as ?? Link

    const { slots } = useNavigationContext()

    const component = React.useMemo<LinkProps>(
      () => ({
        className: slots.link({ className: className?.toString(), isSelected }),
        ...rest,
      }),
      [className, isSelected, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as NavigationLinkProps }
export default Component
