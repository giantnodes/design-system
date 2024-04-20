import type * as Polymophic from '@/utilities/polymorphic'
import type { ButtonProps } from 'react-aria-components'

import React from 'react'
import { Button } from 'react-aria-components'

import { useNavigationContext } from '@/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'button'

type ComponentOwnProps = ButtonProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Button

    const { slots } = useNavigationContext()

    const component = React.useMemo<ButtonProps>(
      () => ({
        className: slots.title({ className: className?.toString() }),
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

export type { ComponentOwnProps as NavigationTriggerProps }
export default Component
