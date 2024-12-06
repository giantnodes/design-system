'use client'

import type { OverlayArrowProps } from 'react-aria-components'
import React from 'react'
import { OverlayArrow } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useTooltip } from '~/components/tooltip/use-tooltip.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = OverlayArrowProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, className, ...rest } = props

    const Element = as ?? OverlayArrow

    const { slots } = useTooltip()

    return (
      <Element {...rest} ref={ref}>
        <svg className={slots.arrow({ className: className?.toString() })} height={8} viewBox="0 0 8 8" width={8}>
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </Element>
    )
  }
)

export type { ComponentOwnProps as TableCellOwnProps, ComponentProps as TableCellProps }
export default Component
