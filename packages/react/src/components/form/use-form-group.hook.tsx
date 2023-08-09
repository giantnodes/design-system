'use client'

import type { FormVariantProps } from '@giantnodes/theme'

import React from 'react'

export const useFormGroup = () => {
  const [isError, setError] = React.useState<boolean | null>(null)
  const [status, setStatus] = React.useState<FormVariantProps['status']>('neutral')

  React.useEffect(() => {
    if (isError == null) {
      setStatus('neutral')
    } else {
      setStatus(isError ? 'danger' : 'success')
    }
  }, [status, isError])

  return {
    status,
    setError,
  }
}

export type UseFormGroupReturn = ReturnType<typeof useFormGroup>
