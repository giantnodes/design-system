import type * as Polymophic from '@/utilities/polymorphic'
import type { DialogProps } from 'react-aria-components'

import React from 'react'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'

import { useDialogContext } from './use-dialog.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = DialogProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Dialog

    const { slots } = useDialogContext()

    const component = React.useMemo<DialogProps>(
      () => ({
        className: slots.content({ className }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <ModalOverlay className={slots.overlay()}>
        <Modal className={slots.modal()}>
          <Element {...component} ref={ref}>
            {children}
          </Element>
        </Modal>
      </ModalOverlay>
    )
  }
)

export type { ComponentOwnProps as DialogContentProps }
export default Component
