import type { ComponentWithoutAs } from '@/utilities/types'

import React from 'react'

import { useLink } from '@/components/link/use-link.hook'

export type LinkProps = ComponentWithoutAs<'a'>

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useLink(props)

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.base({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <a {...getProps()}>{children}</a>
})

Link.displayName = 'Link'

export default Object.assign(Link, {})
