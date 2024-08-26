'use client'

import type { ModalVariantProps } from '@giantnodes/theme'
import type { ModalOverlayProps } from 'react-aria-components'
import React from 'react'
import { ModalOverlay } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { ModalContext, useModal } from '~/components/modal/use-modal.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = ModalOverlayProps & ModalVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => {
  const { as, children, className, blur, placement, position, ...rest } = props

  const Element = as ?? ModalOverlay

  const context = useModal({ blur, placement, position })

  const component = React.useMemo<ModalOverlayProps>(
    () => ({
      className: context.slots.root({ className: cn(className) }),
      ...rest,
    }),
    [context.slots, className, rest]
  )

  return (
    <ModalContext.Provider value={context}>
      <Element {...component}>{children}</Element>
    </ModalContext.Provider>
  )
}

export type { ComponentOwnProps as ModalOwnProps, ComponentProps as ModalProps }
export default Component
