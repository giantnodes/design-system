'use client'

import type { TypographyVariantProps } from '@giantnodes/theme'
import React from 'react'
import { typography } from '@giantnodes/theme'

import type * as Polymorphic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = TypographyVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, size, truncate, variant, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => typography({ size, truncate, variant }), [size, truncate, variant])

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
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

Component.displayName = 'Typography.Text'

export type { ComponentOwnProps as TypographyTextProps, ComponentProps as TypographyTextOwnProps }
export default Component
