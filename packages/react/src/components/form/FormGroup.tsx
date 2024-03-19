import type { UseFormGroupProps } from '@/components/form/use-form-group.hook'
import type { ComponentWithoutAs } from '@/utilities/types'

import React from 'react'
import { useField } from 'react-aria'

import { FormGroupContext, useFormGroup } from '@/components/form/use-form-group.hook'
import { useDomRef } from '@/utilities/dom'

export type FormGroupProps = ComponentWithoutAs<'input'> &
  Omit<UseFormGroupProps, 'ref'> & {
    name: string
    success?: boolean
    warning?: boolean
    error?: boolean
  }

const FormGroup = React.forwardRef<HTMLInputElement, FormGroupProps>((props, ref) => {
  const { name, children, className, success, warning, error, onChange, onBlur, ...rest } = props

  const dom = useDomRef(ref)

  const { labelProps, fieldProps } = useField({ ...props, label: name })
  const context = useFormGroup({ ref: dom, name, labelProps, fieldProps, onChange, onBlur })

  const getProps = React.useCallback(
    () => ({
      className: context.slots.group({
        class: className,
      }),
      ...rest,
    }),
    [className, context.slots, rest]
  )

  React.useEffect(() => {
    if (success) context.setFeedback('success')
    if (warning) context.setFeedback('warning')
    if (error) context.setFeedback('error')
    else context.setFeedback(null)
  }, [context, success, warning, error])

  return (
    <FormGroupContext.Provider value={context}>
      <div
        data-error={error || undefined}
        data-success={success || undefined}
        data-warning={warning || undefined}
        {...getProps()}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return child
          }

          return React.cloneElement(child, {
            status: context.status,
            ...child.props,
          })
        })}
      </div>
    </FormGroupContext.Provider>
  )
})

FormGroup.displayName = 'Form.Group'

FormGroup.defaultProps = {
  error: undefined,
  warning: undefined,
  success: undefined,
}

export default FormGroup
