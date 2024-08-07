'use client'

import type { FormVariantProps } from '@giantnodes/theme'
import type { LabelAria } from 'react-aria'
import React from 'react'
import { form } from '@giantnodes/theme'

import type { ChangeHandler } from '~/utilities/types'
import { createContext } from '~/utilities/context'

export type FeedbackType = 'success' | 'info' | 'warning' | 'error'

type UseFormGroupProps = LabelAria & {
  ref?: React.RefObject<HTMLInputElement | HTMLLabelElement>
  name?: string
  color?: FormVariantProps['color']
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
}

type UseFormGroupReturn = ReturnType<typeof useFormGroup>

export const useFormGroup = (props: UseFormGroupProps) => {
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

export const [FormGroupContext, useFormGroupContext] = createContext<UseFormGroupReturn | undefined>({
  name: 'FormGroupContext',
  strict: false,
  errorMessage: 'useFormGroupContext: `context` is undefined. Seems you forgot to wrap component within <Form.Group />',
})
