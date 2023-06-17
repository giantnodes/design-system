import type { UseBadgeProps } from '@/components/badge/use-badge.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useBadge } from '@/components/badge/use-badge.hook'

export type BadgeProps = Component<'span'> & UseBadgeProps

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { as, children, className, ...rest } = props
  const { slots } = useBadge(props)

  const Component = as || 'span'

  const getBadgeProps = React.useCallback(
    () => ({
      ref,
      className: slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getBadgeProps()}>{children}</Component>
})

Badge.displayName = 'Badge'

export default Object.assign(Badge, {})
