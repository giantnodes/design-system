'use client'

import type { InputVariantProps } from '@giantnodes/theme'
import type { InputProps } from 'react-aria-components'
import React from 'react'
import { Input } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'
import { useInput, useInputValue } from '~/components/input/use-input.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'input'

type ComponentOwnProps = InputVariantProps &
  Omit<InputProps, 'size'> & {
    directory?: boolean
  }

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
    const { className, color, size, shape, variant, directory, ...rest } = props

    const group = useFormGroup<HTMLInputElement>()
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
        directory: directory ? 'true' : undefined,
        webkitdirectory: directory ? 'true' : undefined,
        ...group?.fieldProps,
        ...rest,
      }),
      [className, directory, group?.fieldProps, group?.name, group?.onBlur, group?.onChange, rest, slots]
    )

    return <Input {...component} ref={group?.ref ?? ref} />
  }
)

Component.displayName = 'Input.Text'

export type { ComponentOwnProps as InputTextOwnProps, ComponentProps as InputTextProps }
export default Component
