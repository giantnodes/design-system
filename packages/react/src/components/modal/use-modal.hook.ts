'use client'

import type { ModalVariantProps } from '@giantnodes/theme'
import React from 'react'
import { modal } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseModalProps = ModalVariantProps

type ModalContextType = ReturnType<typeof useModalValue>

export const useModalValue = (props: UseModalProps) => {
  const { blur, placement, position } = props

  const slots = React.useMemo(() => modal({ blur, placement, position }), [blur, placement, position])

  return {
    slots,
  }
}

export const [ModalContext, useModal] = create<ModalContextType>({
  name: 'ModalContext',
  strict: true,
  errorMessage: 'useModal: `context` is undefined. Seems you forgot to wrap component within <Modal.Root />',
})
