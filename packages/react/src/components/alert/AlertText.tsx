import type { Component } from '@/utilities/types'

import React from 'react'

import { useAlertContext } from '@/components/alert/use-alert-context.hook'

export type AlertTextProps = Component<'p'>

const AlertText = React.forwardRef<HTMLParagraphElement, AlertTextProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useAlertContext()

  const Component = as || 'p'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.text({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

AlertText.displayName = 'Alert.Text'

export default AlertText
