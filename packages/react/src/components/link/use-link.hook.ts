import type { LinkVariantProps } from '@giantnodes/theme'

import { link } from '@giantnodes/theme'
import React from 'react'

export type UseLinkProps = LinkVariantProps

export const useLink = () => {
  const slots = React.useMemo(() => link({}), [])

  return {
    slots,
  }
}

export type UseLinkReturn = ReturnType<typeof useLink>
