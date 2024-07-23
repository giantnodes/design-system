'use client'

import React from 'react'
import { form } from '@giantnodes/theme'

import type * as Polymophic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'legend'

type ComponentOwnProps = unknown

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
    const { as, children, className, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => form({}), [])

    const component = React.useMemo(
      () => ({
        className: slots.legend({ className }),
        ...rest,
      }),
      [className, slots, rest]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as FormLegendOwnProps, ComponentProps as FormLegendSetProps }
export default Component
