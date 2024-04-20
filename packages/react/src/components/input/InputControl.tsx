import type * as Polymophic from '@/utilities/polymorphic'
import type { InputProps } from 'react-aria-components'

import React from 'react'
import { Input } from 'react-aria-components'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'
import { useInputContext } from '@/components/input/use-input.hook'

const __ELEMENT_TYPE__ = 'input'

type ComponentOwnProps = InputProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Input

    const { slots } = useInputContext()
    const group = useFormGroupContext()

    const component = React.useMemo<InputProps>(
      () => ({
        name: group?.name,
        onChange: group?.onChange,
        onBlur: group?.onBlur,
        className: slots.control({ className: className?.toString() }),
        ...group?.fieldProps,
        ...rest,
      }),
      [className, group?.fieldProps, group?.name, group?.onBlur, group?.onChange, rest, slots]
    )

    return (
      <Element {...component} ref={(group?.ref as React.RefObject<HTMLInputElement>) ?? ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as InputControlProps }
export default Component
