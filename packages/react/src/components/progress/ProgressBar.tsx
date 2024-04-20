import type * as Polymophic from '@/utilities/polymorphic'

import React from 'react'

import { useProgressContext } from '@/components/progress/use-progress.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = {
  color: string
  width: number
}

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, style, color, width, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useProgressContext()

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

export type { ComponentOwnProps as ProgressBarProps }
export default Component
