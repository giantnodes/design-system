'use client'

import type { SpinnerVariantProps } from '@giantnodes/theme'
import React from 'react'
import { spinner } from '@giantnodes/theme'

import type * as Polymorphic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'svg'

type ComponentOwnProps = SpinnerVariantProps

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
    const { as, className, size, ...rest } = props

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

Component.displayName = 'Spinner'

export type { ComponentOwnProps as SpinnerOwnProps, ComponentProps as SpinnerProps }
export default Component
