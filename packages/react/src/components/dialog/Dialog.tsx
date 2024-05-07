import type * as Polymophic from '@/utilities/polymorphic'
import type { DialogVariantProps } from '@giantnodes/theme'
import type { DialogTriggerProps } from 'react-aria-components'

import React from 'react'
import { DialogTrigger } from 'react-aria-components'

import DialogContent from '@/components/dialog/DialogContent'
import { DialogContext, useDialog } from '@/components/dialog/use-dialog.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = DialogTriggerProps & DialogVariantProps

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
  const { as, children, className, size, blur, placement, ...rest } = props

  const Element = as ?? DialogTrigger

  const context = useDialog({ size, blur, placement })

  const component = React.useMemo<Omit<DialogTriggerProps, 'children'>>(
    () => ({
      className: context.slots.dialog({ className }),
      ...rest,
    }),
    [context.slots, className, rest]
  )

  return (
    <DialogContext.Provider value={context}>
      <Element {...component}>{children}</Element>
    </DialogContext.Provider>
  )
}

export type { ComponentOwnProps as DialogOwnProps, ComponentProps as DialogProps }
export default Object.assign(Component, {
  Content: DialogContent,
})
