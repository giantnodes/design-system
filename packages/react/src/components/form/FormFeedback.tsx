import type { ComponentWithoutAs } from '@/utilities/types'
import type { TextProps as ComponentProps } from 'react-aria-components'

import clsx from 'clsx'
import React from 'react'
import { Text as Component } from 'react-aria-components'

import { useFormGroupContext } from '@/components/form/use-form-group.context'

export type FeedbackType = 'success' | 'warning' | 'error'

export type FormFeedbackProps = ComponentWithoutAs<'span'> &
  ComponentProps & {
    type: FeedbackType
  }

const FormFeedback = React.forwardRef<HTMLSpanElement, FormFeedbackProps>((props, ref) => {
  const { children, className, type, ...rest } = props

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

  return <Component {...getProps()}>{children}</Component>
})

FormFeedback.displayName = 'Form.Feedback'

export default FormFeedback
