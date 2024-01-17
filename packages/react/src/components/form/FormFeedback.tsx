import type { Component } from '@/utilities/types'

import clsx from 'clsx'
import React from 'react'

import { useFormGroupContext } from '@/components/form/use-form-group.context'
import { useFormContext } from '@/components/form/use-form.context'

export type FeedbackType = 'valid' | 'invalid' | 'warning'

export type FormFeedbackProps = Component<'span'> & {
  type: FeedbackType
}

const FormFeedback = React.forwardRef<HTMLSpanElement, FormFeedbackProps>((props, ref) => {
  const { as, children, className, type, ...rest } = props

  const Component = as || 'span'

  const { slots } = useFormContext()
  const { status } = useFormGroupContext()

  const isVisible = React.useMemo<boolean>(() => {
    switch (type) {
      case 'valid':
        return status === 'success'
      case 'invalid':
        return status === 'danger'
      case 'warning':
        return status === 'warning'
      default:
        return false
    }
  }, [status, type])

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.feedback({
        class: clsx(className, { hidden: !isVisible }),
        status,
      }),
      ...rest,
    }),
    [ref, slots, className, isVisible, status, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

FormFeedback.displayName = 'Form.Feedback'

export default FormFeedback
