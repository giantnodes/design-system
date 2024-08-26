'use client'

import type { DialogVariantProps } from '@giantnodes/theme'
import React from 'react'
import { dialog } from '@giantnodes/theme'

import { createContext } from '~/utilities/context'

export type UseDialogProps = DialogVariantProps

export type UseDialogReturn = ReturnType<typeof useDialog>

export const useDialog = (_: UseDialogProps) => {
  const slots = React.useMemo(() => dialog(), [])

  return {
    slots,
  }
}

export const [DialogContext, useDialogContext] = createContext<UseDialogReturn>({
  name: 'DialogContext',
  strict: true,
  errorMessage: 'useDialogContext: `context` is undefined. Seems you forgot to wrap component within <Dialog.Root />',
})
