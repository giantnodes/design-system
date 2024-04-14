import type { UseDialogProps } from '@/components/dialog/use-dialog.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { DialogTriggerProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { DialogTrigger as Component } from 'react-aria-components'

import DialogContent from '@/components/dialog/DialogContent'
import { DialogContext, useDialog } from '@/components/dialog/use-dialog.hook'

export type DialogProps = ComponentWithoutAs<'div'> & ComponentProps & UseDialogProps

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const { children, className, blur, placement, ...rest } = props

  const context = useDialog({ blur, placement })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.dialog({ className }),
      ...rest,
    }),
    [className, context.slots, ref, rest]
  )

  return (
    <DialogContext.Provider value={context}>
      <Component {...getProps()}>{children}</Component>
    </DialogContext.Provider>
  )
})

Dialog.displayName = 'Dialog'

export default Object.assign(Dialog, {
  Content: DialogContent,
})
