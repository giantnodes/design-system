import type { AvatarVariantProps } from '@giantnodes/theme'

import { avatar } from '@giantnodes/theme'
import React from 'react'

export type UseAvatarProps = AvatarVariantProps

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

export type UseAvatarReturn = ReturnType<typeof useAvatar>
