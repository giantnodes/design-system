import type { ComponentWithoutAs } from '@/utilities/types'

import React from 'react'

export type TypographyHeadingLevelProps = ComponentWithoutAs<'div'>

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

  return <div {...getProps()}>{children}</div>
})

TypographyHeadingLevel.displayName = 'Typography.HeadingLevel'

export default TypographyHeadingLevel
