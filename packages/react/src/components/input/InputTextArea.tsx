'use client'

import type { InputVariantProps } from '@giantnodes/theme'
import type { TextAreaProps } from 'react-aria-components'
import React from 'react'
import { TextArea } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'
import { useInput, useInputValue } from '~/components/input/use-input.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'textarea'

type ComponentOwnProps = InputVariantProps & TextAreaProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { className, color, size, shape, variant, ...rest } = props

    const group = useFormGroup<HTMLTextAreaElement>()
    const context = useInput()

    const { slots } = useInputValue({
      color: color ?? context?.color,
      size: size ?? context?.size,
      shape: shape ?? context?.shape,
      variant: variant ?? context?.variant,
    })

    const input = React.useMemo<TextAreaProps>(
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

    return <TextArea {...input} ref={group?.ref ?? ref} />
  }
)

Component.displayName = 'Input.TextArea'

export type { ComponentOwnProps as InputTextAreaOwnProps, ComponentProps as InputTextAreaProps }
export default Component
