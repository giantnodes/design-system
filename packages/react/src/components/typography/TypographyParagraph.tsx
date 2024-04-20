import type * as Polymophic from '@/utilities/polymorphic'
import type { TypographyVariantProps } from '@giantnodes/theme'
import type { TextProps } from 'react-aria-components'

import { typography } from '@giantnodes/theme'
import React from 'react'
import { Text } from 'react-aria-components'

const __ELEMENT_TYPE__ = 'p'

type ComponentOwnProps = TextProps & TypographyVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, variant, ...rest } = props

    const Element = as ?? Text

    const slots = React.useMemo(() => typography({ variant }), [variant])

    const component = React.useMemo<TextProps>(
      () => ({
        className: slots.paragraph({ className }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as TypographyParagraphProps }
export default Component
