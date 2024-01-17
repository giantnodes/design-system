import type { ComponentWithoutAs } from '@/utilities/types'
import type { TypographyVariantProps } from '@giantnodes/theme'

import React from 'react'

import { useTypography } from '@/components/typography/use-typography.hook'

export type TypographyHeadingProps = ComponentWithoutAs<'h1'> & TypographyVariantProps

const TypographyHeading = React.forwardRef<HTMLHeadingElement, TypographyHeadingProps>((props, ref) => {
  const { children, className, level, variant, ...rest } = props

  const Component = `h${level}`
  const { slots } = useTypography({ level, variant })

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.heading({
        class: className,
      }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

TypographyHeading.displayName = 'Typography.Heading'

export default TypographyHeading
