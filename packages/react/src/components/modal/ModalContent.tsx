'use client'

import type { ModalVariantProps } from '@giantnodes/theme'
import type { ModalOverlayProps } from 'react-aria-components'
import React from 'react'
import { Modal } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useModalContext } from '~/components/modal/use-modal.hook'
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
  const { as, children, className, ...rest } = props

  const Element = as ?? Modal

  const { slots } = useModalContext()

  const component = React.useMemo<ModalOverlayProps>(
    () => ({
      className: slots.content({ className: cn(className) }),
      ...rest,
    }),
    [slots, className, rest]
  )

  return <Element {...component}>{children}</Element>
}

export type { ComponentOwnProps as ModalContentOwnProps, ComponentProps as ModalContentProps }
export default Component
