import type { HeadingLevel } from '@/components/typography/use-heading-level.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { HeadingProps as ComponentProps } from 'react-aria-components'

import { heading } from '@giantnodes/theme'
import React from 'react'
import { Heading as Component } from 'react-aria-components'

import { HeadingLevelContext } from '@/components/typography/use-heading-level.hook'

export type TypographyHeadingProps = ComponentWithoutAs<'h1'> &
  ComponentProps & {
    as?: HeadingLevel
  }

const TypographyHeading = React.forwardRef<HTMLHeadingElement, TypographyHeadingProps>((props, ref) => {
  const { children, className, as, ...rest } = props

  const context = React.useContext(HeadingLevelContext)

  if (context === undefined) {
    throw new Error('<Typography.Heading /> component must be a descendant of <Typography.HeadingLevel /> component.')
  }

  if (context.level > 6) {
    throw new Error(`<Typography.HeadingLevel /> cannot be nested ${context.level} times. The maximum is 6 levels.`)
  }

  const level = React.useMemo(() => context.level || 1, [context.level])

  const slots = React.useMemo(() => heading({ level }), [level])

  const getProps = React.useCallback(
    () => ({
      ref,
      level,
      className: slots.heading({ className, level: as || level }),
      ...rest,
    }),
    [ref, level, slots, className, as, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TypographyHeading.displayName = 'Typography.Heading'

TypographyHeading.defaultProps = {
  as: undefined,
}

export default TypographyHeading
