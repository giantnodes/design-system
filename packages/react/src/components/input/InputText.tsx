'use client'

import type { InputVariantProps } from '@giantnodes/theme'
import type { InputProps } from 'react-aria-components'
import React from 'react'
import { Input } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'
import { useInput, useInputValue } from '~/components/input/use-input.hook'
import { cn } from '~/utilities'

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
    const { as, children, className, color, size, shape, variant, ...rest } = props

    const Element = as ?? Input

    const group = useFormGroup()
    const context = useInput()

    const { slots } = useInputValue({
      color: color ?? group?.status ?? context?.color,
      size: size ?? context?.size,
      shape: shape ?? context?.shape,
      variant: variant ?? context?.variant,
    })

    const component = React.useMemo<InputProps>(
      () => ({
        name: group?.name,
        onChange: group?.onChange,
        onBlur: group?.onBlur,
        className: slots.input({ className: cn(className) }),
        ...group?.fieldProps,
        ...rest,
      }),
      [className, group?.fieldProps, group?.name, group?.onBlur, group?.onChange, rest, slots]
    )

    return (
      <Element {...component} ref={(group?.ref as React.RefObject<HTMLInputElement> | undefined) ?? ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as InputTextOwnProps, ComponentProps as InputTextProps }
export default Component
