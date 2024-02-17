import type { UseAlertProps } from '@/components/alert/use-alert.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import AlertBody from '@/components/alert/AlertBody'
import AlertHeading from '@/components/alert/AlertHeading'
import AlertItem from '@/components/alert/AlertItem'
import AlertList from '@/components/alert/AlertList'
import AlertText from '@/components/alert/AlertText'
import { AlertContext, useAlert } from '@/components/alert/use-alert.hook'

export type AlertProps = Component<'div'> & UseAlertProps

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { as, children, className, color, ...rest } = props

  const Component = as || 'div'

  const context = useAlert({ color })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, context.slots, className, rest]
  )

  return (
    <AlertContext.Provider value={context}>
      <Component {...getProps()}>{children}</Component>
    </AlertContext.Provider>
  )
})

Alert.displayName = 'Alert'

export default Object.assign(Alert, {
  Body: AlertBody,
  Heading: AlertHeading,
  Item: AlertItem,
  List: AlertList,
  Text: AlertText,
})
