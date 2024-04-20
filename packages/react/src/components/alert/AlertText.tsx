import type * as Polymophic from '@/utilities/polymorphic'
import type { TextProps } from 'react-aria-components'

import React from 'react'
import { Text } from 'react-aria-components'

import { useAlertContext } from '@/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'p'

type ComponentOwnProps = TextProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Text

    const { slots } = useAlertContext()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.text({ className }),
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

export type { ComponentOwnProps as AlertTextProps }
export default Component
