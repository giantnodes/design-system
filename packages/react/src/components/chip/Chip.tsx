'use client'

import type { ChipVariantProps } from '@giantnodes/theme'
import React from 'react'
import { chip } from '@giantnodes/theme'

import type * as Polymophic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = ChipVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymophic.Ref<TElement>) => {
    const { as, children, className, color, size, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => chip({ color, size }), [color, size])

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.chip({ className }),
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

export type { ComponentOwnProps as ChipOwnProps, ComponentProps as ChipProps }
export default Component
