import type { FeedbackType } from '@/components/form/FormFeedback'
import type { FormVariantProps } from '@giantnodes/theme'
import type { LabelAria } from 'react-aria'

import { form } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

export type UseFormGroupProps = LabelAria & {
  ref: React.RefObject<HTMLInputElement>
  name?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.ChangeEventHandler<HTMLInputElement>
}

export type UseFormGroupReturn = ReturnType<typeof useFormGroup>

export const useFormGroup = (props: UseFormGroupProps) => {
  const { ref, name, fieldProps, labelProps, onChange, onBlur } = props

  const [feedback, setFeedback] = React.useState<FeedbackType | null>(null)

  const status = React.useMemo<FormVariantProps['status']>(() => {
    switch (feedback) {
      case 'success':
        return 'success'
      case 'warning':
        return 'warning'
      case 'error':
        return 'danger'
      default:
        return 'neutral'
    }
  }, [feedback])

  const slots = React.useMemo(() => form({ status }), [status])

  return {
    ref,
    name,
    fieldProps,
    labelProps,
    slots,
    status,
    feedback,
    setFeedback,
    onChange,
    onBlur,
  }
}

export const [FormGroupContext, useFormGroupContext] = createContext<UseFormGroupReturn>({
  name: 'FormGroupContext',
  strict: false,
  errorMessage: 'useFormGroupContext: `context` is undefined. Seems you forgot to wrap component within <Form.Group />',
})
