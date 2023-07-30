import type { Component } from '@/utilities/types'

import React from 'react'

import { useFormContext } from '@/components/form/use-form.context'

export type FormCaptionProps = Component<'span'>

const FormCaption = React.forwardRef<HTMLSpanElement, FormCaptionProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const { slots } = useFormContext()
  const Component = as || 'span'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.caption({
        class: className,
      }),
      ...rest,
    }),
    [ref, className, slots, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

FormCaption.displayName = 'Form.Caption'

export default FormCaption
