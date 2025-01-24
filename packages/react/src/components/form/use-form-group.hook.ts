'use client'

import type { FormVariantProps } from '@giantnodes/theme'
import type { LabelAria } from 'react-aria'
import React from 'react'
import { form } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

export type FeedbackType = 'success' | 'info' | 'warning' | 'error'

type UseFormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLLabelElement

type UseFormGroupProps<T extends UseFormElement = UseFormElement> = LabelAria & {
  ref?: React.RefObject<T>
  name?: string
  color?: FormVariantProps['color']
  onChange?: React.ChangeEventHandler<T>
  onBlur?: React.FocusEventHandler<T>
}

type FormGroupContextType<T extends UseFormElement = UseFormElement> = ReturnType<typeof useFormGroupValue<T>>

export const useFormGroupValue = <T extends UseFormElement = UseFormElement>(props: UseFormGroupProps<T>) => {
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

export const [FormGroupContext, useFormGroupBase] = create<FormGroupContextType | undefined>({
  name: 'FormGroupContext',
  strict: false,
  errorMessage: 'useFormGroup: `context` is undefined. Seems you forgot to wrap component within <Form.Group />',
})

export const useFormGroup = <T extends UseFormElement = UseFormElement>() => {
  const context = useFormGroupBase()
  return context as FormGroupContextType<T> | undefined
}
