'use client'

import type { FormVariantProps } from '@giantnodes/design-system'

import { form } from '@giantnodes/design-system'
import React from 'react'

export type UseFormProps = FormVariantProps

export const useForm = (props: UseFormProps) => {
  const slots = React.useMemo(() => form({}), [])

  return {
    slots,
  }
}

export type UseFormReturn = ReturnType<typeof useForm>
