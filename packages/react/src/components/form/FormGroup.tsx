'use client'

import React from 'react'
import { useField } from 'react-aria'

import type * as Polymorphic from '~/utilities/polymorphic'
import { FormGroupContext, useFormGroupValue } from '~/components/form/use-form-group.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = {
  name: string
  success?: boolean
  warning?: boolean
  error?: boolean
}

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, name, success, info, warning, error, onChange, onBlur, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const { labelProps, fieldProps } = useField({ ...props, label: name })
    const context = useFormGroupValue({
      ref,
      name,
      labelProps,
      fieldProps,
      onChange,
      onBlur,
    })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        'data-success': success ?? undefined,
        'data-info': info ?? undefined,
        'data-warning': warning ?? undefined,
        'data-error': error ?? undefined,
        className: context.slots.group({ className }),
        ...rest,
      }),
      [className, context.slots, error, info, rest, success, warning]
    )

    React.useEffect(() => {
      if (success) context.setFeedback('success')
      if (info) context.setFeedback('info')
      if (warning) context.setFeedback('warning')
      if (error) context.setFeedback('error')
      else context.setFeedback(null)
    }, [context, error, info, success, warning])

    return (
      <FormGroupContext.Provider value={context}>
        <Element {...component}>{children}</Element>
      </FormGroupContext.Provider>
    )
  }
)

export type { ComponentOwnProps as FormGroupOwnProps, ComponentProps as FormGroupProps }
export default Component
