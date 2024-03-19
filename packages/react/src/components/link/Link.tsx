import type { ComponentWithoutAs } from '@/utilities/types'
import type { LinkProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Link as Component } from 'react-aria-components'

import { useLink } from '@/components/link/use-link.hook'

export type LinkProps = ComponentWithoutAs<'a'> & ComponentProps

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useLink()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.base({ className }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

Link.displayName = 'Link'

export default Link
