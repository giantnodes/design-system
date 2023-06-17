import type { AvatarProps } from '@/components/avatar/Avatar'
import type { UseAvatarProps } from '@/components/avatar/use-avatar.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import { useAvatar } from '@/components/avatar/use-avatar.hook'

export type AvatarGroupProps = Component<'div'> & UseAvatarProps

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { as, children, className, radius, size, ...rest } = props
  const { slots } = useAvatar(props)

  const Component = as || 'div'

  const getAvatarGroupProps = React.useCallback(
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
    <Component {...getAvatarGroupProps()}>
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

AvatarGroup.displayName = 'AvatarGroup'

export default AvatarGroup
