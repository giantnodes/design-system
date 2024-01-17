import type { UseFormProps } from '@/components/form/use-form.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { FormProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Form as Component } from 'react-aria-components'

import FormCaption from '@/components/form/FormCaption'
import FormFeedback from '@/components/form/FormFeedback'
import FormGroup from '@/components/form/FormGroup'
import FormLabel from '@/components/form/FormLabel'
import { FormProvider } from '@/components/form/use-form.context'
import { useForm } from '@/components/form/use-form.hook'

export type FormProps = ComponentWithoutAs<'form'> & UseFormProps & ComponentProps

const Form = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { children, className, status, ...rest } = props

  const context = useForm({ status })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.form({ className }),
      ...rest,
    }),
    [ref, className, context.slots, rest]
  )

  return (
    <FormProvider value={context}>
      <Component {...getProps()}>{children}</Component>
    </FormProvider>
  )
})

Form.displayName = 'Form'

export default Object.assign(Form, {
  Caption: FormCaption,
  Feedback: FormFeedback,
  Group: FormGroup,
  Label: FormLabel,
})
