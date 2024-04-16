import type { ComponentWithoutAs } from '@/utilities/types'
import type { LinkProps } from 'react-aria-components'

import { link } from '@giantnodes/theme'
import React from 'react'
import { Link } from 'react-aria-components'

import { useDomRef } from '@/hooks/use-dom-ref'
import { useLink } from '@/hooks/use-link.hook'

type ComponentProps = ComponentWithoutAs<'a'> & LinkProps

const Component = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, className } = props

  const dom = useDomRef(ref)
  const { ...rest } = useLink(props, dom)

  const slots = React.useMemo(() => link({}), [])

  const component = React.useMemo<LinkProps>(
    () => ({
      ref,
      className: slots.link({ class: className?.toString() }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Link {...component}>{children}</Link>
})

Component.displayName = 'Link'

export { ComponentProps as LinkProps }
export default Component
