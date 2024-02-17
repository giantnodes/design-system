import type { Component } from '@/utilities/types'

import React from 'react'

import { useAlertContext } from '@/components/alert/use-alert.hook'

export type AlertBodyProps = Component<'div'>

const AlertBody = React.forwardRef<HTMLDivElement, AlertBodyProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useAlertContext()

  const Component = as || 'div'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.body({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

AlertBody.displayName = 'Alert.Body'

export default AlertBody
