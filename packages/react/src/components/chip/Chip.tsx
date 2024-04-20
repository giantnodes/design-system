import type * as Polymophic from '@/utilities/polymorphic'
import type { ChipVariantProps } from '@giantnodes/theme'

import { chip } from '@giantnodes/theme'
import React from 'react'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = ChipVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, color, radius, size, variant, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => chip({ color, radius, size, variant }), [color, radius, size, variant])

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.base({ className }),
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

export type { ComponentOwnProps as ChipProps }
export default Component
