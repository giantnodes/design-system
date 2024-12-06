'use client'

import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useProgress } from '~/components/progress/use-progress.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = {
  color: string
  width: number
}

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
    const { as, children, className, style, color, width, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useProgress()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.bar({ className }),
        style: {
          ...style,
          backgroundColor: color,
          width: `${width}%`,
        },
        ...rest,
      }),
      [className, color, context.slots, rest, style, width]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Progress.Bar'

export type { ComponentOwnProps as ProgressBarOwnProps, ComponentProps as ProgressBarProps }
export default Component
