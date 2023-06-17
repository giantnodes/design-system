import type { AvatarVariantProps } from '@giantnodes/design-system'

import React from 'react'
import { avatar } from '@giantnodes/design-system'

export type UseAvatarProps = AvatarVariantProps

export const useAvatar = (props: UseAvatarProps) => {
  const { radius, size, zoomed } = props

  const slots = React.useMemo(
    () =>
      avatar({
        radius,
        size,
        zoomed,
      }),
    [radius, size, zoomed]
  )

  return {
    slots,
  }
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
