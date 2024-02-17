import type { Component } from '@/utilities/types'

import React from 'react'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'

export type FormCaptionProps = Component<'span'>

const FormCaption = React.forwardRef<HTMLSpanElement, FormCaptionProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const Component = as || 'span'
  const { slots } = useFormGroupContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.caption({ className }),
      ...rest,
    }),
    [ref, className, slots, rest]
  )

  return (
    <Component slot="description" {...getProps()}>
      {children}
    </Component>
  )
})

FormCaption.displayName = 'Form.Caption'

export default FormCaption
