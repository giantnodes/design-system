import type { Component } from '@/utilities/types'
import type { TypographyVariantProps } from '@giantnodes/theme'

import React from 'react'

import { useTypography } from '@/components/typography/use-typography.hook'

export type TypographyTextProps = Component<'p'> & TypographyVariantProps

const TypographyText = React.forwardRef<HTMLParagraphElement, TypographyTextProps>((props, ref) => {
  const { as, children, className, level, variant, ...rest } = props

  const Component = as || 'p'
  const { slots } = useTypography({ level, variant })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.text({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TypographyText.displayName = 'Typography.Text'

export default TypographyText
