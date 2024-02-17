import type { Component } from '@/utilities/types'

import React from 'react'

import { useAvatarContext } from '@/components/avatar/use-avatar.hook'

export type AvatarImageProps = Component<'img'>

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>((props, ref) => {
  const { as, children, className, src, alt, ...rest } = props

  const Component = as || 'img'
  const { slots } = useAvatarContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      src,
      alt,
      className: slots.img({
        class: className,
      }),
      ...rest,
    }),
    [ref, src, alt, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

AvatarImage.displayName = 'Avatar.Image'

export default AvatarImage
