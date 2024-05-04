import type { Ref, RefObject } from 'react'

import { useImperativeHandle, useRef } from 'react'

export const useDomRef = <T extends HTMLElement = HTMLElement>(ref?: RefObject<T | null> | Ref<T | null>) => {
  const domRef = useRef<TElement>(null)

  useImperativeHandle(ref, () => domRef.current)

  return domRef
}

export type UseDomRefReturn = ReturnType<typeof useDomRef>
