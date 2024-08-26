'use client'

import type { FormVariantProps } from '@giantnodes/theme'
import type { LabelAria } from 'react-aria'
import React from 'react'
import { form } from '@giantnodes/theme'

import type { ChangeHandler } from '~/utilities/types'
import { create } from '~/utilities/create-context'

export type FeedbackType = 'success' | 'info' | 'warning' | 'error'

type UseFormGroupProps = LabelAria & {
  ref?: React.RefObject<HTMLInputElement | HTMLLabelElement>
  name?: string
  color?: FormVariantProps['color']
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
}

type FormGroupContextType = ReturnType<typeof useFormGroupValue>

export const useFormGroupValue = (props: UseFormGroupProps) => {
  const { ref, name, fieldProps, labelProps, onChange, onBlur } = props

  const [feedback, setFeedback] = React.useState<FeedbackType | null>(null)

  const status = React.useMemo<FormVariantProps['color']>(() => {
    switch (feedback) {
      case 'success':
        return 'success'
      case 'info':
        return 'info'
      case 'warning':
        return 'warning'
      case 'error':
        return 'danger'
      default:
        return 'neutral'
    }
  }, [feedback])

  const slots = React.useMemo(() => form({ color: status }), [status])

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

export const [FormGroupContext, useFormGroup] = create<FormGroupContextType | undefined>({
  name: 'FormGroupContext',
  strict: false,
  errorMessage: 'useFormGroup: `context` is undefined. Seems you forgot to wrap component within <Form.Group />',
})
