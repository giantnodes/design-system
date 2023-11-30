'use client'

import type { FormVariantProps } from '@giantnodes/theme'

import { form } from '@giantnodes/theme'
import React from 'react'

export type UseFormProps = FormVariantProps

export const useForm = (props: UseFormProps) => {
  const { status } = props

  const slots = React.useMemo(() => form({ status }), [status])

  return {
    slots,
  }
}

export type UseFormReturn = ReturnType<typeof useForm>
