'use client'

import type { ModalVariantProps } from '@giantnodes/theme'
import React from 'react'
import { modal } from '@giantnodes/theme'

import { createContext } from '~/utilities/context'

export type UseModalProps = ModalVariantProps

export type UseModalReturn = ReturnType<typeof useModal>

export const useModal = (props: UseModalProps) => {
  const { blur, placement, position } = props

  const slots = React.useMemo(() => modal({ blur, placement, position }), [blur, placement, position])

  return {
    slots,
  }
}

export const [ModalContext, useModalContext] = createContext<UseModalReturn>({
  name: 'ModalContext',
  strict: true,
  errorMessage: 'useModalContext: `context` is undefined. Seems you forgot to wrap component within <Modal.Root />',
})
