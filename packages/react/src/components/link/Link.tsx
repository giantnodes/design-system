import type * as Polymophic from '@/utilities/polymorphic'
import type { LinkVariantProps } from '@giantnodes/theme'
import type { LinkProps } from 'react-aria-components'

import { link } from '@giantnodes/theme'
import React from 'react'
import { Link } from 'react-aria-components'

const __ELEMENT_TYPE__ = 'a'

type ComponentOwnProps = LinkVariantProps & LinkProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, size, underline, ...rest } = props

    const Element = as ?? Link

    const slots = React.useMemo(() => link({ size, underline }), [size, underline])

    const component = React.useMemo<LinkProps>(
      () => ({
        className: slots.link({ className: className?.toString() }),
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

export type { ComponentOwnProps as LinkProps }
export default Component
