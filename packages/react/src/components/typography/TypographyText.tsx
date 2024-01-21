import type { Component } from '@/utilities/types'
import type { TypographyVariantProps } from '@giantnodes/theme'

import { typography } from '@giantnodes/theme'
import React from 'react'

export type TypographyTextProps = Component<'span'> & TypographyVariantProps

const TypographyText = React.forwardRef<HTMLParagraphElement, TypographyTextProps>((props, ref) => {
  const { as, children, className, variant, ...rest } = props

  const Component = as || 'span'

  const slots = React.useMemo(() => typography({ variant }), [variant])

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.paragraph({ className }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TypographyText.displayName = 'Typography.Text'

export default TypographyText
