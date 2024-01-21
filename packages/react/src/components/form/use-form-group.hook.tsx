'use client'

import type { FeedbackType } from '@/components/form/FormFeedback'
import type { FormVariantProps } from '@giantnodes/theme'

import { form } from '@giantnodes/theme'
import React from 'react'

export const useFormGroup = () => {
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
    slots,
    status,
    feedback,
    setFeedback,
  }
}

export type UseFormGroupReturn = ReturnType<typeof useFormGroup>
