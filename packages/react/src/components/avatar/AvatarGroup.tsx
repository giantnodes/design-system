import type { AvatarProps } from '@/components/avatar/Avatar'
import type { UseAvatarProps } from '@/components/avatar/use-avatar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useAvatar } from '@/components/avatar/use-avatar.hook'

export type AvatarGroupProps = Component<'div'> & UseAvatarProps

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { as, children, className, color, radius, size, zoomed, ...rest } = props

  const Component = as || 'div'
  const { slots } = useAvatar({ color, radius, size, zoomed })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.group({
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
          color: color ?? child.props.color,
          radius: radius ?? child.props.radius,
          size: size ?? child.props.size,
          zoomed: zoomed ?? child.props.zoomed,
        })
      })}
    </Component>
  )
})

AvatarGroup.displayName = 'Avatar.Group'

export default AvatarGroup
