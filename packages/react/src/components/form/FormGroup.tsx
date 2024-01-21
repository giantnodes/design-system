import type { Component } from '@/utilities/types'

import React from 'react'

import { FormGroupProvider } from '@/components/form/use-form-group.context'
import { useFormGroup } from '@/components/form/use-form-group.hook'
import { Input } from '@/components/input'

export type FormGroupProps = Component<'div'> & {
  success?: boolean
  warning?: boolean
  error?: boolean
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { as, children, className, success, warning, error, ...rest } = props

  const Component = as || 'div'

  const context = useFormGroup()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.group({
        class: className,
      }),
      ...rest,
    }),
    [ref, className, context.slots, rest]
  )

  React.useEffect(() => {
    if (success) context.setFeedback('success')
    if (warning) context.setFeedback('warning')
    if (error) context.setFeedback('error')
    else context.setFeedback(null)
  }, [context, success, warning, error])

  return (
    <FormGroupProvider value={context}>
      <Component
        data-error={error || undefined}
        data-success={success || undefined}
        data-warning={warning || undefined}
        {...getProps()}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child) || child.type !== Input) {
            return child
          }

          return React.cloneElement(child, {
            status: context.status,
            ...child.props,
          })
        })}
      </Component>
    </FormGroupProvider>
  )
})

FormGroup.displayName = 'Form.Group'

FormGroup.defaultProps = {
  error: undefined,
  warning: undefined,
  success: undefined,
}

export default FormGroup
