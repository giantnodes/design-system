'use client'

import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useAlert } from '~/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'li'

type ComponentOwnProps = object

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const { slots } = useAlert()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.item({ className }),
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

export type { ComponentOwnProps as AlertItemOwnProps, ComponentProps as AlertItemProps }
export default Component
