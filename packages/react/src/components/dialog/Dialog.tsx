'use client'

import type { DialogProps } from 'react-aria-components'
import React from 'react'
import { Dialog } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { DialogContext, useDialogValue } from '~/components/dialog/use-dialog.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = DialogProps

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

    const Element = as ?? Dialog

    const context = useDialogValue({})

    const component = React.useMemo<DialogProps>(
      () => ({
        className: context.slots.root({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <DialogContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </DialogContext.Provider>
    )
  }
)

export type { ComponentOwnProps as DialogOwnProps, ComponentProps as DialogProps }
export default Component
