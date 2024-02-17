import type { Component } from '@/utilities/types'

import React from 'react'

import { useAlertContext } from '@/components/alert/use-alert.hook'

export type AlertHeadingProps = Component<'h3'>

const AlertHeading = React.forwardRef<HTMLHeadingElement, AlertHeadingProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useAlertContext()

  const Component = as || 'h3'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.heading({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

AlertHeading.displayName = 'Alert.Heading'

export default AlertHeading
