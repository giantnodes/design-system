import type * as Polymophic from '@/utilities/polymorphic'
import type { HeadingProps } from 'react-aria-components'

import React from 'react'
import { Heading } from 'react-aria-components'

import { useAlertContext } from '@/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'h1'

type ComponentOwnProps = HeadingProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, level = 3, ...rest } = props

    const Element = as ?? Heading

    const { slots } = useAlertContext()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        level,
        className: slots.heading({ className }),
        ...rest,
      }),
      [className, level, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as AlertHeadingProps }
export default Component
