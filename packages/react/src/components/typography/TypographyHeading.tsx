import type { ComponentWithoutAs } from '@/utilities/types'
import type { TypographyVariantProps } from '@giantnodes/theme'

import * as Ariakit from '@ariakit/react'
import React from 'react'

import { useTypography } from '@/components/typography/use-typography.hook'

export type TypographyHeadingProps = ComponentWithoutAs<'h1'> & TypographyVariantProps

const TypographyHeading = React.forwardRef<HTMLHeadingElement, TypographyHeadingProps>((props, ref) => {
  const { children, className, level, ...rest } = props
  const { slots } = useTypography(props)

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

  return <Ariakit.Heading {...getProps()}>{children}</Ariakit.Heading>
})

TypographyHeading.displayName = 'Typography.Heading'

export default TypographyHeading
