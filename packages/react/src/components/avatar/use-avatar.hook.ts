import type { AvatarVariantProps } from '@giantnodes/design-system'

import { avatar } from '@giantnodes/design-system'
import React from 'react'

export type UseAvatarProps = AvatarVariantProps

export const useAvatar = (props: UseAvatarProps) => {
  const { radius, size, status, zoomed } = props

  const slots = React.useMemo(
    () =>
      avatar({
        radius,
        size,
        status,
        zoomed,
      }),
    [radius, size, status, zoomed]
  )

  return {
    slots,
  }
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
