import type { Component } from '@/utilities/types'

import clsx from 'clsx'
import React from 'react'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'

export type FeedbackType = 'success' | 'warning' | 'error'

export type FormFeedbackProps = Component<'span'> & {
  type: FeedbackType
}

const FormFeedback = React.forwardRef<HTMLSpanElement, FormFeedbackProps>((props, ref) => {
  const { as, children, className, type, ...rest } = props

  const Component = as || 'span'
  const { slots, status, feedback } = useFormGroupContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.feedback({
        class: clsx(className, { hidden: type !== feedback }),
        status,
      }),
      ...rest,
    }),
    [ref, slots, className, type, feedback, status, rest]
  )

  return (
    <Component {...getProps()} slot="errorMessage">
      {children}
    </Component>
  )
})

FormFeedback.displayName = 'Form.Feedback'

export default FormFeedback
