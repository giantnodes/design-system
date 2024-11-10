'use client'

import type { InputVariantProps } from '@giantnodes/theme'
import type { InputProps, TextFieldProps } from 'react-aria-components'
import React from 'react'
import { Input, TextField } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'
import { useInput, useInputValue } from '~/components/input/use-input.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'input'

type ComponentOwnProps = InputVariantProps & Omit<TextFieldProps, 'children'>

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
    const { as, className, color, size, shape, variant, ...rest } = props

    const Element = as ?? TextField

    const group = useFormGroup()
    const context = useInput()

    const { slots } = useInputValue({
      color: color ?? group?.status ?? context?.color,
      size: size ?? context?.size,
      shape: shape ?? context?.shape,
      variant: variant ?? context?.variant,
    })

    const component = React.useMemo<TextFieldProps>(
      () => ({
        name: group?.name,
        onChange: (value: string) =>
          group?.onChange?.({
            target: { value },
            type: 'change',
          }),
        onBlur: group?.onBlur,
        ...group?.fieldProps,
        ...rest,
      }),
      [group, rest]
    )

    const input = React.useMemo<InputProps>(
      () => ({
        className: slots.input({ className: cn(className) }),
      }),
      [className, slots]
    )

    return (
      <Element {...component}>
        <Input {...input} ref={(group?.ref as React.RefObject<HTMLInputElement> | undefined) ?? ref} />
      </Element>
    )
  }
)

export type { ComponentOwnProps as InputTextOwnProps, ComponentProps as InputTextProps }
export default Component
