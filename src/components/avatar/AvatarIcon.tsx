import type { UseAvatarProps } from '@/components/avatar/use-avatar.hook'
import type { Component } from '@/utils/types'

import React from 'react'

import { useAvatar } from '@/components/avatar/use-avatar.hook'

export type AvatarIconProps = Component<'span'> &
  UseAvatarProps & {
    icon: React.ReactNode
  }

const AvatarIcon = React.forwardRef<HTMLImageElement, AvatarIconProps>((props, ref) => {
  const { as, className, icon, ...rest } = props
  const { slots } = useAvatar(props)

  const Component = as || 'span'

  const getAvatarIconProps = React.useCallback(
    () => ({
      ref,
      className: slots.icon({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getAvatarIconProps()}>{icon}</Component>
})

export default AvatarIcon
