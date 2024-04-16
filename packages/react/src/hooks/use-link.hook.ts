import type { FocusableElement, PressEvent } from '@react-types/shared'
import type React from 'react'
import type { AriaLinkOptions } from 'react-aria'

import { shouldClientNavigate, useRouter } from '@react-aria/utils'
import { useLink as useAriaLink } from 'react-aria'

export const useLink = (props: AriaLinkOptions, ref: React.RefObject<FocusableElement>) => {
  const { onPress: onAriaPress, ...rest } = props
  const router = useRouter()

  const onPress = (event: PressEvent) => {
    const { target } = event

    if (!(target instanceof HTMLAnchorElement)) return

    if (!router.isNative && target.href && shouldClientNavigate(target, event)) {
      router.open(target, event)
    }
  }

  return useAriaLink({ ...rest, onPress }, ref)
}

export type UseLinkReturn = ReturnType<typeof useLink>
