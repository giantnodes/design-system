import type * as Polymophic from '@/utilities/polymorphic'

import { spinner } from '@giantnodes/theme'
import React from 'react'

const __ELEMENT_TYPE__ = 'svg'

type ComponentOwnProps = {}

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>) => {
    const { as, children, className, size, status, variant, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => spinner({}), [])

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.svg({ className }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element fill="none" viewBox="0 0 24 24" {...component}>
        <circle className={slots.circle()} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2.5} />
        <path
          className={slots.path()}
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        />
      </Element>
    )
  }
)

export type { ComponentOwnProps as SpinnerProps }
export default Component
