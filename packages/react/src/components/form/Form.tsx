import type { ComponentWithoutAs } from '@/utilities/types'
import type { FormVariantProps } from '@giantnodes/theme'

import React from 'react'

import FormCaption from '@/components/form/FormCaption'
import FormFeedback from '@/components/form/FormFeedback'
import FormGroup from '@/components/form/FormGroup'
import FormLabel from '@/components/form/FormLabel'
import { FormProvider } from '@/components/form/use-form.context'
import { useForm } from '@/components/form/use-form.hook'

export type FormProps = ComponentWithoutAs<'form'> & FormVariantProps

const Form = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { children, className, ...rest } = props

  const context = useForm(props)

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.form({
        class: className,
      }),
      ...rest,
    }),
    [ref, className, context.slots, rest]
  )

  return (
    <FormProvider value={context}>
      <form {...getProps()}>{children}</form>
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
