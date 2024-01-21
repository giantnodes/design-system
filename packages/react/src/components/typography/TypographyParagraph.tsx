import type { ComponentWithoutAs } from '@/utilities/types'
import type { TypographyVariantProps } from '@giantnodes/theme'

import { typography } from '@giantnodes/theme'
import React from 'react'

export type TypographyParagraphProps = ComponentWithoutAs<'p'> & TypographyVariantProps

const TypographyParagraph = React.forwardRef<HTMLParagraphElement, TypographyParagraphProps>((props, ref) => {
  const { children, className, variant, ...rest } = props

  const slots = React.useMemo(() => typography({ variant }), [variant])

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.paragraph({ className }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <p {...getProps()}>{children}</p>
})

TypographyParagraph.displayName = 'Typography.Paragraph'

export default TypographyParagraph
