'use client'

import type { HeadingProps } from 'react-aria-components'
import React from 'react'
import { Heading } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useAlert } from '~/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'h1'

type ComponentOwnProps = HeadingProps

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

export type { ComponentOwnProps as AlertHeadingOwnProps, ComponentProps as AlertHeadingProps }
export default Component
