import type { UseAvatarProps } from '@/components/avatar/use-avatar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import AvatarGroup from '@/components/avatar/AvatarGroup'
import AvatarIcon from '@/components/avatar/AvatarIcon'
import AvatarImage from '@/components/avatar/AvatarImage'
import AvatarNotification from '@/components/avatar/AvatarNotification'
import { useAvatar } from '@/components/avatar/use-avatar.hook'

export type AvatarProps = Component<'span'> & UseAvatarProps

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { as, className, children, radius, size, ...rest } = props
  const { slots } = useAvatar(props)

  const Component = as || 'span'

  const getAvatarProps = React.useCallback(
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
    <Component {...getAvatarProps()}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<AvatarProps>(child)) {
          return child
        }

        return React.cloneElement(child, {
          radius: radius ?? child.props.radius,
          size: size ?? child.props.size,
        })
      })}
    </Component>
  )
})

Avatar.defaultProps = {
  ref: null,
}

export default Object.assign(Avatar, {
  Group: AvatarGroup,
  Image: AvatarImage,
  Icon: AvatarIcon,
  Notification: AvatarNotification,
})
