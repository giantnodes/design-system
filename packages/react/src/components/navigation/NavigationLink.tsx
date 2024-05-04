import type * as Polymophic from '@/utilities/polymorphic'
import type { LinkProps } from 'react-aria-components'

import React from 'react'
import { Link } from 'react-aria-components'

import { useNavigationContext } from '@/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'a'

type ComponentOwnProps = LinkProps & {
  isSelected?: boolean
}

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
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

export type { ComponentOwnProps as NavigationLinkOwnProps, ComponentProps as NavigationLinkProps }
export default Component
