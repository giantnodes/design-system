import type { DialogProps, ModalOverlayProps } from 'react-aria-components'

import React from 'react'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'

import { useDialogContext } from '@/components/dialog/use-dialog.hook'

type ComponentProps = DialogProps

const Component = React.forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
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

Component.displayName = 'Dialog.Content'

export { ComponentProps as DialogContentProps }
export default Component
