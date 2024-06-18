'use client'

import type * as Polymophic from '@/utilities/polymorphic'
import type { SpinnerVariantProps } from '@giantnodes/theme'

import { spinner } from '@giantnodes/theme'
import React from 'react'

const __ELEMENT_TYPE__ = 'svg'

type ComponentOwnProps = SpinnerVariantProps

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
    const { as, children, className, size, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => spinner({ size }), [size])

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.svg({ className }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element fill="none" viewBox="0 0 24 24" {...component} ref={ref}>
        <circle className={slots.circle()} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2.5} />
        <path
          className={slots.path()}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        />
      </Element>
    )
  }
)

export type { ComponentOwnProps as SpinnerOwnProps, ComponentProps as SpinnerProps }
export default Component
