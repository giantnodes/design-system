'use client'

import type { DialogProps } from 'react-aria-components'
import React from 'react'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useDialogContext } from '~/components/dialog/use-dialog.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = DialogProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
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

export type { ComponentOwnProps as DialogContentOwnProps, ComponentProps as DialogContentProps }
export default Component
