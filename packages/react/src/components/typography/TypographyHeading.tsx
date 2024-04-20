import type { HeadingLevel } from '@/components/typography/use-heading-level.hook'
import type * as Polymophic from '@/utilities/polymorphic'
import type { HeadingProps } from 'react-aria-components'

import { heading } from '@giantnodes/theme'
import React from 'react'
import { Heading } from 'react-aria-components'

import { HeadingLevelContext } from '@/components/typography/use-heading-level.hook'

const __ELEMENT_TYPE__ = 'h1'

type ComponentOwnProps = HeadingProps & {
  level?: HeadingLevel
}

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Heading

    const context = React.useContext(HeadingLevelContext)

    if (context === undefined) {
      throw new Error('<Typography.Heading /> component must be a descendant of <Typography.HeadingLevel /> component.')
    }

    if (context.level > 6) {
      throw new Error(`<Typography.HeadingLevel /> cannot be nested ${context.level} times. The maximum is 6 levels.`)
    }

    const level = React.useMemo(() => rest.level ?? context.level ?? 1, [context.level, rest.level])

    const slots = React.useMemo(() => heading({ level }), [level])

    const component = React.useMemo<HeadingProps>(
      () => ({
        className: slots.heading({ className, level }),
        ...rest,
      }),
      [className, level, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as TypographyHeadingProps }
export default Component
