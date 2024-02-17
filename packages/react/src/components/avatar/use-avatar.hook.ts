import type { AvatarVariantProps } from '@giantnodes/theme'

import { avatar } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

export type UseAvatarProps = AvatarVariantProps

export type UseAvatarReturn = ReturnType<typeof useAvatar>

export const useAvatar = (props: UseAvatarProps) => {
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
  }
}

export const [AvatarContext, useAvatarContext] = createContext<UseAvatarReturn>({
  name: 'AvatarContext',
  strict: true,
  errorMessage: 'useAvatarContext: `context` is undefined. Seems you forgot to wrap component within <Avatar />',
})
