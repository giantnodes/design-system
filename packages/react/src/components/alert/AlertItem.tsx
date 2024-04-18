import type * as Polymophic from '@/utilities/polymorphic'

import React from 'react'

import { useAlertContext } from '@/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'li'

type ComponentOwnProps = {}

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const { slots } = useAlertContext()

    const component = React.useMemo(
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

export type { ComponentOwnProps as AlertItemProps }
export default Component
