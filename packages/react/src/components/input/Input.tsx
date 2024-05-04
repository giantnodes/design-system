import type * as Polymophic from '@/utilities/polymorphic'
import type { InputVariantProps } from '@giantnodes/theme'
import type { InputProps } from 'react-aria-components'

import React from 'react'
import { Input } from 'react-aria-components'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'
import InputAddon from '@/components/input/InputAddon'
import InputGroup from '@/components/input/InputGroup'
import { useInput, useInputContext } from '@/components/input/use-input.hook'

const __ELEMENT_TYPE__ = 'input'

type ComponentOwnProps = InputVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, color, size, variant, ...rest } = props

    const Element = as || Input

    const context = useInputContext()
    const { slots } = useInput({
      color: color ?? context?.color,
      size: size ?? context?.size,
      variant: variant ?? context?.variant,
    })

    const group = useFormGroupContext()

    const component = React.useMemo<InputProps>(
      () => ({
        name: group?.name,
        onChange: group?.onChange,
        onBlur: group?.onBlur,
        className: slots.input({ className: className?.toString() }),
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

export type { ComponentOwnProps as InputOwnProps, ComponentProps as InputProps }
export default Object.assign(Component, {
  Addon: InputAddon,
  Group: InputGroup,
})
