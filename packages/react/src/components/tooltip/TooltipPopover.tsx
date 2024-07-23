'use client'

import type { TooltipProps } from 'react-aria-components'
import React from 'react'
import { Tooltip } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import TooltipArrow from '~/components/tooltip/TooltipArrow'
import { useTooltipContext } from '~/components/tooltip/use-tooltip.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = TooltipProps

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
    const { as, children, className, ...rest } = props

    const Element = as ?? Tooltip

    const { slots } = useTooltipContext()

    const component = React.useMemo<TooltipProps>(
      () => ({
        className: slots.popover({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        <>
          <TooltipArrow />

          {children}
        </>
      </Element>
    )
  }
)

export type { ComponentOwnProps as TooltipPopoverOwnProps, ComponentProps as TooltipPopoverProps }
export default Component
