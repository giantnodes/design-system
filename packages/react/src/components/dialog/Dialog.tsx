import type * as Polymophic from '@/utilities/polymorphic'
import type { DialogVariantProps } from '@giantnodes/theme'
import type { DialogTriggerProps } from 'react-aria-components'

import React from 'react'
import { DialogTrigger } from 'react-aria-components'

import DialogContent from '@/components/dialog/DialogContent'
import { DialogContext, useDialog } from '@/components/dialog/use-dialog.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = DialogTriggerProps & DialogVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>) => {
  const { as, children, className, blur, placement, ...rest } = props

  const Element = as ?? DialogTrigger

  const context = useDialog({ blur, placement })

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

export type { ComponentOwnProps as DialogProps }
export default Object.assign(Component, {
  Content: DialogContent,
})
