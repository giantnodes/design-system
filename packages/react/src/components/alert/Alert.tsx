import type { Component } from '@/utilities/types'

import React from 'react'

import AlertBody from '@/components/alert/AlertBody'
import AlertHeading from '@/components/alert/AlertHeading'
import AlertItem from '@/components/alert/AlertItem'
import AlertList from '@/components/alert/AlertList'
import AlertText from '@/components/alert/AlertText'
import { AlertProvider } from '@/components/alert/use-alert-context.hook'
import { useAlert } from '@/components/alert/use-alert.hook'

export type AlertProps = Component<'div'>

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { as, children, className, ...rest } = props

  const context = useAlert(props)
  const Component = as || 'div'

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
    <AlertProvider value={context}>
      <Component {...getProps()}>{children}</Component>
    </AlertProvider>
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
