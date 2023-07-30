import type { Component } from '@/utilities/types'

import React from 'react'

import { FormGroupProvider } from '@/components/form/use-form-group.context'
import { useFormGroup } from '@/components/form/use-form-group.hook'
import { useFormContext } from '@/components/form/use-form.context'

export type FormGroupProps = Component<'div'> & {
  error?: string | boolean | null
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { as, children, className, error, ...rest } = props

  const { slots } = useFormContext()
  const context = useFormGroup()

  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.group({
        class: className,
      }),
      ...rest,
    }),
    [ref, className, slots, rest]
  )

  React.useEffect(() => {
    if (error === undefined) {
      context.setError(null)
    } else {
      context.setError(error != null)
    }
  }, [context, error])

  return (
    <FormGroupProvider value={context}>
      <Component {...getProps()}>{children}</Component>
    </FormGroupProvider>
  )
})

FormGroup.displayName = 'Form.Group'

FormGroup.defaultProps = {
  error: undefined,
}

export default FormGroup
