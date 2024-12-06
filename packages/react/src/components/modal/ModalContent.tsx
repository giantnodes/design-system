'use client'

import type { ModalVariantProps } from '@giantnodes/theme'
import type { ModalOverlayProps } from 'react-aria-components'
import React from 'react'
import { Modal } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useModal } from '~/components/modal/use-modal.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = ModalOverlayProps & ModalVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Modal

    const { slots } = useModal()

    const component = React.useMemo<ModalOverlayProps>(
      () => ({
        className: slots.content({ className: cn(className) }),
        ...rest,
      }),
      [slots, className, rest]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as ModalContentOwnProps, ComponentProps as ModalContentProps }
export default Component
