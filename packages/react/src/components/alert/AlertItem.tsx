import type { Component } from '@/utilities/types'

import React from 'react'

import { useAlertContext } from '@/components/alert/use-alert-context.hook'

export type AlertItemProps = Component<'li'>

const AlertItem = React.forwardRef<HTMLLIElement, AlertItemProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useAlertContext()

  const Component = as || 'li'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.item({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component role="listitem" {...getProps()}>
      {children}
    </Component>
  )
})

AlertItem.displayName = 'Alert.Item'

export default AlertItem
