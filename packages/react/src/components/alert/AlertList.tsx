import type { Component } from '@/utilities/types'

import React from 'react'

import { useAlertContext } from '@/components/alert/use-alert.hook'

export type AlertListProps = Component<'ul'>

const AlertList = React.forwardRef<HTMLUListElement, AlertListProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useAlertContext()

  const Component = as || 'ul'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.list({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component role="list" {...getProps()}>
      {children}
    </Component>
  )
})

AlertList.displayName = 'Alert.List'

export default AlertList
