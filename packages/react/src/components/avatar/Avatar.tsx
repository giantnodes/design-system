import type { UseAvatarProps } from '@/components/avatar/use-avatar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import AvatarGroup from '@/components/avatar/AvatarGroup'
import AvatarIcon from '@/components/avatar/AvatarIcon'
import AvatarImage from '@/components/avatar/AvatarImage'
import AvatarNotification from '@/components/avatar/AvatarNotification'
import { AvatarContext, useAvatar } from '@/components/avatar/use-avatar.hook'

export type AvatarProps = Component<'span'> & UseAvatarProps

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const { as, className, children, color, radius, size, zoomed, ...rest } = props

  const Component = as || 'span'
  const context = useAvatar({ color, radius, size, zoomed })

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
    <AvatarContext.Provider value={context}>
      <Component {...getProps()}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement<AvatarProps>(child)) {
            return child
          }

          return React.cloneElement(child, {
            color: color ?? child.props.color,
            radius: radius ?? child.props.radius,
            size: size ?? child.props.size,
            zoomed: zoomed ?? child.props.zoomed,
          })
        })}
      </Component>
    </AvatarContext.Provider>
  )
})

Avatar.displayName = 'Avatar'

export default Object.assign(Avatar, {
  Group: AvatarGroup,
  Image: AvatarImage,
  Icon: AvatarIcon,
  Notification: AvatarNotification,
})
