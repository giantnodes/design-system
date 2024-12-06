'use client'

import type { LinkProps } from 'react-aria-components'
import React from 'react'
import { Link } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useNavigation } from '~/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'a'

type ComponentOwnProps = LinkProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymophic.Ref<TElement>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Link

    const { slots } = useNavigation()

    const component = React.useMemo<LinkProps>(
      () => ({
        className: slots.trigger({ className: className?.toString() }),
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

export type { ComponentOwnProps as NavigationLinkOwnProps, ComponentProps as NavigationLinkProps }
export default Component
