'use client'

import type * as Polymophic from '@/utilities/polymorphic'

import React from 'react'
import { useField } from 'react-aria'

import { FormGroupContext, useFormGroup } from './use-form-group.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = {
  name: string
  success?: boolean
  warning?: boolean
  error?: boolean
}

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
    const { as, children, className, name, success, warning, error, onChange, onBlur, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const { labelProps, fieldProps } = useField({ ...props, label: name })
    const context = useFormGroup({ ref, name, labelProps, fieldProps, onChange, onBlur })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        'data-error': error ?? undefined,
        'data-success': success ?? undefined,
        'data-warning': warning ?? undefined,
        className: context.slots.group({ className }),
        ...rest,
      }),
      [className, context.slots, error, rest, success, warning]
    )

    React.useEffect(() => {
      if (success) context.setFeedback('success')
      if (warning) context.setFeedback('warning')
      if (error) context.setFeedback('error')
      else context.setFeedback(null)
    }, [context, success, warning, error])

    return (
      <FormGroupContext.Provider value={context}>
        <Element {...component}>{children}</Element>
      </FormGroupContext.Provider>
    )
  }
)

export type { ComponentOwnProps as FormGroupOwnProps, ComponentProps as FormGroupProps }
export default Component
