import type { Component } from '@/utilities/types'

import React from 'react'

import { useFormContext } from '@/components/form/use-form.context'

export type FormLabelProps = Component<'label'>

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const { slots } = useFormContext()
  const Component = as || 'label'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.label({
        class: className,
      }),
      ...rest,
    }),
    [ref, className, slots, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

FormLabel.displayName = 'Form.Label'

export default FormLabel
