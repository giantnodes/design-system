import type { ComponentWithoutAs } from '@/utilities/types'
import type { HeadingVariantProps } from '@giantnodes/theme'
import type { HeadingProps as ComponentProps } from 'react-aria-components'

import { heading } from '@giantnodes/theme'
import React from 'react'
import { Heading as Component } from 'react-aria-components'

export type TypographyHeadingProps = ComponentWithoutAs<'h1'> & ComponentProps & HeadingVariantProps

const TypographyHeading = React.forwardRef<HTMLHeadingElement, TypographyHeadingProps>((props, ref) => {
  const { children, className, level, ...rest } = props

  const slots = React.useMemo(() => heading({ level }), [level])

  const getProps = React.useCallback(
    () => ({
      ref,
      level,
      className: slots.heading({ className }),
      ...rest,
    }),
    [ref, level, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TypographyHeading.displayName = 'Typography.Heading'

export default TypographyHeading
