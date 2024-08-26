'use client'

import type { DialogVariantProps } from '@giantnodes/theme'
import React from 'react'
import { dialog } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseDialogProps = DialogVariantProps

type DialogContextType = ReturnType<typeof useDialogValue>

export const useDialogValue = (_: UseDialogProps) => {
  const slots = React.useMemo(() => dialog(), [])

  return {
    slots,
  }
}

export const [DialogContext, useDialog] = create<DialogContextType>({
  name: 'DialogContext',
  strict: true,
  errorMessage: 'useDialog: `context` is undefined. Seems you forgot to wrap component within <Dialog.Root />',
})
