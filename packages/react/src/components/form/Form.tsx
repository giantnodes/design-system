import type { ComponentWithoutAs } from '@/utilities/types'
import type { FormProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Form as Component } from 'react-aria-components'

import FormCaption from '@/components/form/FormCaption'
import FormFeedback from '@/components/form/FormFeedback'
import FormGroup from '@/components/form/FormGroup'
import FormLabel from '@/components/form/FormLabel'

export type FormProps = ComponentWithoutAs<'form'> & ComponentProps

const Form = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { children, className, ...rest } = props

  const getProps = React.useCallback(
    () => ({
      ref,
      ...rest,
    }),
    [ref, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

Form.displayName = 'Form'

export default Object.assign(Form, {
  Caption: FormCaption,
  Feedback: FormFeedback,
  Group: FormGroup,
  Label: FormLabel,
})
