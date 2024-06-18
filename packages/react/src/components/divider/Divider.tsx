'use client'

import type * as Polymophic from '@/utilities/polymorphic'
import type { DividerVariantProps } from '@giantnodes/theme'

import { divider } from '@giantnodes/theme'
import React from 'react'

const __ELEMENT_TYPE__ = 'hr'

type ComponentOwnProps = DividerVariantProps

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
    const { as, children, className, orientation, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => divider({ orientation }), [orientation])

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        'aria-orientation': orientation,
        'data-orientation': orientation,
        className: slots.divider({ className }),
        ...rest,
      }),
      [className, orientation, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as DividerOwnProps, ComponentProps as DividerProps }
export default Component
