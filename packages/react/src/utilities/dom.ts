import type { Ref, RefObject } from 'react'

import { useImperativeHandle, useRef } from 'react'

// eslint-disable-next-line import/prefer-default-export
export const useDomRef = <T extends HTMLElement = HTMLElement>(ref?: RefObject<T | null> | Ref<T | null>) => {
  const domRef = useRef<T>(null)

  useImperativeHandle(ref, () => domRef.current)

  return domRef
}
