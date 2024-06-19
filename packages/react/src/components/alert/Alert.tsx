'use client'

import type { AlertVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymophic from '~/utilities/polymorphic'
import { AlertContext, useAlert } from '~/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = AlertVariantProps

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
    const { as, children, className, color, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAlert({ color })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.alert({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <AlertContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </AlertContext.Provider>
    )
  }
)

export type { ComponentOwnProps as AlertOwnProps, ComponentProps as AlertProps }
export default Component
