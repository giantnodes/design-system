'use client'

import type { FormVariantProps } from '@giantnodes/theme'

import { form } from '@giantnodes/theme'
import React from 'react'

export type UseFormProps = FormVariantProps

export const useForm = (props: UseFormProps) => {
  const slots = React.useMemo(() => form({}), [])

  return {
    slots,
  }
}

export type UseFormReturn = ReturnType<typeof useForm>
