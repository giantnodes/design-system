'use client'

import type { AvatarVariantProps } from '@giantnodes/theme'
import React from 'react'
import { avatar } from '@giantnodes/theme'

import { create } from '~/utilities/create-context'

type UseAvatarProps = AvatarVariantProps

type AvatarContextType = ReturnType<typeof useAvatarValue>

export const useAvatarValue = (props: UseAvatarProps) => {
  const { color, radius, size, zoomed } = props

  const slots = React.useMemo(
    () =>
      avatar({
        color,
        radius,
        size,
        zoomed,
      }),
    [color, radius, size, zoomed]
  )

  return {
    slots,
    color,
    radius,
    size,
    zoomed,
  }
}

export const [AvatarContext, useAvatar] = create<AvatarContextType | undefined>({
  name: 'AvatarContext',
  strict: false,
  errorMessage: 'useAvatar: `context` is undefined. Seems you forgot to wrap component within <Avatar.Root />',
})
