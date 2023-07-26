import type { UseAvatarProps } from '@/components/avatar/use-avatar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import AvatarGroup from '@/components/avatar/AvatarGroup'
import AvatarIcon from '@/components/avatar/AvatarIcon'
import AvatarImage from '@/components/avatar/AvatarImage'
import AvatarNotification from '@/components/avatar/AvatarNotification'
import { useAvatar } from '@/components/avatar/use-avatar.hook'

export type AvatarProps = Component<'span'> & UseAvatarProps

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { as, className, children, radius, size, status, ...rest } = props
  const { slots } = useAvatar(props)

  const Component = as || 'span'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component {...getProps()}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<AvatarProps>(child)) {
          return child
        }

        return React.cloneElement(child, {
          radius: radius ?? child.props.radius,
          size: size ?? child.props.size,
          status: status ?? child.props.status,
        })
      })}
    </Component>
  )
})

Avatar.displayName = 'Avatar'

export default Object.assign(Avatar, {
  Group: AvatarGroup,
  Image: AvatarImage,
  Icon: AvatarIcon,
  Notification: AvatarNotification,
})
