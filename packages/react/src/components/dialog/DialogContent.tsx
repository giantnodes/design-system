import type { ComponentWithoutAs } from '@/utilities/types'
import type { DialogProps } from 'react-aria-components'

import React from 'react'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'

import { useDialogContext } from '@/components/dialog/use-dialog.hook'

export type DialogContentProps = ComponentWithoutAs<'div'> & DialogProps

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useDialogContext()

  const getOverlayProps = React.useCallback(
    () => ({
      className: slots.overlay(),
    }),
    [slots]
  )

  const getModalProps = React.useCallback(
    () => ({
      className: slots.modal(),
    }),
    [slots]
  )

  const getContentProps = React.useCallback(
    () => ({
      ref,
      className: slots.content({ className }),
      ...rest,
    }),
    [className, slots, ref, rest]
  )

  return (
    <ModalOverlay {...getOverlayProps()}>
      <Modal {...getModalProps()}>
        <Dialog {...getContentProps()}>{children}</Dialog>
      </Modal>
    </ModalOverlay>
  )
})

DialogContent.displayName = 'Dialog.Content'

export default DialogContent
