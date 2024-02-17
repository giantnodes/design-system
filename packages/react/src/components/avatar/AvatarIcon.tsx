import type { Component } from '@/utilities/types'

import React from 'react'

import { useAvatarContext } from '@/components/avatar/use-avatar.hook'

export type AvatarIconProps = Component<'span'> & {
  icon: React.ReactNode
}

const AvatarIcon = React.forwardRef<HTMLImageElement, AvatarIconProps>((props, ref) => {
  const { as, className, icon, ...rest } = props

  const Component = as || 'span'
  const { slots } = useAvatarContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.icon({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{icon}</Component>
})

AvatarIcon.displayName = 'Avatar.Icon'

export default AvatarIcon
