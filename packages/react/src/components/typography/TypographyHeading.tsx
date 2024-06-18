'use client'

import type { HeadingProps } from 'react-aria-components'
import React from 'react'
import { heading } from '@giantnodes/theme'
import { Heading } from 'react-aria-components'

import type { HeadingLevel } from '~/components/typography/use-heading-level.hook'
import type * as Polymophic from '~/utilities/polymorphic'
import { HeadingLevelContext } from '~/components/typography/use-heading-level.hook'

const __ELEMENT_TYPE__ = 'h1'

type ComponentOwnProps = HeadingProps & {
  level?: HeadingLevel
}

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, level, ...rest } = props

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
        className: slots.heading({ className, level: level ?? context.level }),
        ...rest,
      }),
      [className, context.level, level, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as TypographyHeadingOwnProps, ComponentProps as TypographyHeadingProps }
export default Component
