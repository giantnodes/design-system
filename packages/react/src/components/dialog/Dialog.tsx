import type { UseDialogProps } from '@/components/dialog/use-dialog.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { DialogTriggerProps } from 'react-aria-components'

import React from 'react'
import { DialogTrigger } from 'react-aria-components'

import DialogContent from '@/components/dialog/DialogContent'
import { DialogContext, useDialog } from '@/components/dialog/use-dialog.hook'

type ComponentProps = ComponentWithoutAs<'div'> & Omit<DialogTriggerProps, 'children'> & UseDialogProps

const Component = React.forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  const { children, className, blur, placement, ...rest } = props

  const context = useDialog({ blur, placement })

  const trigger = React.useMemo<DialogTriggerProps>(
    () => ({
      ref,
      children,
      className: context.slots.dialog({ className }),
      ...rest,
    }),
    [children, className, context.slots, ref, rest]
  )

  return (
    <DialogContext.Provider value={context}>
      <DialogTrigger {...trigger}>{children}</DialogTrigger>
    </DialogContext.Provider>
  )
})

Component.displayName = 'Dialog'

export { ComponentProps as DialogProps }
export default Object.assign(Component, {
  Content: DialogContent,
})
