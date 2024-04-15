import type { ComponentWithoutAs } from '@/utilities/types'
import type { DialogProps, ModalOverlayProps } from 'react-aria-components'

import React from 'react'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'

import { useDialogContext } from '@/components/dialog/use-dialog.hook'

export type DialogContentProps = ComponentWithoutAs<'div'> & DialogProps

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useDialogContext()

  const overlay = React.useMemo<ModalOverlayProps>(
    () => ({
      className: slots.overlay(),
    }),
    [slots]
  )

  const modal = React.useMemo<ModalOverlayProps>(
    () => ({
      className: slots.modal(),
    }),
    [slots]
  )

  const content = React.useMemo<DialogProps>(
    () => ({
      ref,
      className: slots.content({ className }),
      ...rest,
    }),
    [className, slots, ref, rest]
  )

  return (
    <ModalOverlay {...overlay}>
      <Modal {...modal}>
        <Dialog {...content}>{children}</Dialog>
      </Modal>
    </ModalOverlay>
  )
})

DialogContent.displayName = 'Dialog.Content'

export default DialogContent
