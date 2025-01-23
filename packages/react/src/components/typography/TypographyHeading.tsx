'use client'

import type { HeadingProps } from 'react-aria-components'
import React from 'react'
import { heading } from '@giantnodes/theme'
import { Heading } from 'react-aria-components'

import type { HeadingLevel } from '~/components/typography/use-heading-level.hook'
import type * as Polymorphic from '~/utilities/polymorphic'
import { HeadingLevelContext } from '~/components/typography/use-heading-level.hook'

const __ELEMENT_TYPE__ = 'h1'

type ComponentOwnProps = HeadingProps & {
  level?: HeadingLevel
}

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
    const { as, children, className, level, truncate, ...rest } = props

    const Element = as ?? Heading

    const context = React.useContext(HeadingLevelContext)

    if (context === undefined) {
      throw new Error('<Typography.Heading /> component must be a descendant of <Typography.HeadingLevel /> component.')
    }

    if (context.level > 6) {
      throw new Error(`<Typography.HeadingLevel /> cannot be nested ${context.level} times. The maximum is 6 levels.`)
    }

    const slots = React.useMemo(() => heading({ level }), [level])

    const component = React.useMemo<HeadingProps>(
      () => ({
        className: slots.heading({ className, level: level ?? context.level, truncate }),
        ...rest,
      }),
      [className, context.level, level, rest, slots, truncate]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Typography.Heading'

export type { ComponentOwnProps as TypographyHeadingOwnProps, ComponentProps as TypographyHeadingProps }
export default Component
