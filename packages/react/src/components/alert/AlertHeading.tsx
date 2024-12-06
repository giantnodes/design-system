'use client'

import type { HeadingProps } from 'react-aria-components'
import React from 'react'
import { Heading } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useAlert } from '~/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'h1'

type ComponentOwnProps = HeadingProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, level = 3, ...rest } = props

    const Element = as ?? Heading

    const { slots } = useAlert()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        level,
        className: slots.heading({ className }),
        ...rest,
      }),
      [className, level, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Alert.Heading'

export type { ComponentOwnProps as AlertHeadingOwnProps, ComponentProps as AlertHeadingProps }
export default Component
