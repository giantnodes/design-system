import type { ComponentWithoutAs } from '@/utilities/types'

import * as Ariakit from '@ariakit/react'
import React from 'react'

export type TypographyHeadingLevelProps = ComponentWithoutAs<'div'> & Ariakit.HeadingLevelProps

const TypographyHeadingLevel = React.forwardRef<HTMLHeadingElement, TypographyHeadingLevelProps>((props, ref) => {
  const { children, className, ...rest } = props

  const getProps = React.useCallback(
    () => ({
      ref,
      className,
      ...rest,
    }),
    [ref, className, rest]
  )

  return <Ariakit.HeadingLevel {...getProps()}>{children}</Ariakit.HeadingLevel>
})

TypographyHeadingLevel.displayName = 'Typography.HeadingLevel'

export default TypographyHeadingLevel
