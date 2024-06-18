'use client'

import type * as Polymophic from '@/utilities/polymorphic'
import type { LinkVariantProps } from '@giantnodes/theme'
import type { LinkProps } from 'react-aria-components'

import { link } from '@giantnodes/theme'
import React from 'react'
import { Link } from 'react-aria-components'

const __ELEMENT_TYPE__ = 'a'

type ComponentOwnProps = LinkVariantProps & LinkProps

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
    const { as, children, className, underline, ...rest } = props

    const Element = as ?? Link

    const slots = React.useMemo(() => link({ underline }), [underline])

    const component = React.useMemo<LinkProps>(
      () => ({
        className: slots.link({ className: className?.toString() }),
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

export type { ComponentOwnProps as LinkOwnProps, ComponentProps as LinkProps }
export default Component
