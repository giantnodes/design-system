import type { UseAvatarProps } from '@/components/avatar/use-avatar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useAvatar } from '@/components/avatar/use-avatar.hook'

export type AvatarNotificationProps = Component<'span'> & UseAvatarProps

const AvatarNotification = React.forwardRef<HTMLSpanElement, AvatarNotificationProps>((props, ref) => {
  const { as, className, ...rest } = props
  const { slots } = useAvatar(props)

  const Component = as || 'span'

  const getAvatarNotificationProps = React.useCallback(
    () => ({
      ref,
      className: slots.notification({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getAvatarNotificationProps()} />
})

AvatarNotification.displayName = 'AvatarNotification'

export default AvatarNotification
