import type { ComponentWithoutAs } from '@/utilities/types'
import type { LinkProps } from 'react-aria-components'

import { link } from '@giantnodes/theme'
import React from 'react'
import { Link } from 'react-aria-components'

type ComponentProps = ComponentWithoutAs<'a'> & LinkProps

const Component = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, className, ...rest } = props

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
