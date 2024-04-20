import type * as Polymophic from '@/utilities/polymorphic'

import { divider } from '@giantnodes/theme'
import React from 'react'

const __ELEMENT_TYPE__ = 'hr'

type ComponentOwnProps = {
  icon: React.ReactNode
}

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
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

export type { ComponentOwnProps as DividerProps }
export default Component
