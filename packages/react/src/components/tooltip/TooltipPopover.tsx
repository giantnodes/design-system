'use client'

import type { TooltipProps } from 'react-aria-components'
import React from 'react'
import { Tooltip } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import TooltipArrow from '~/components/tooltip/TooltipArrow'
import { useTooltip } from '~/components/tooltip/use-tooltip.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = TooltipProps

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
    const { as, children, className, ...rest } = props

    const Element = as ?? Tooltip

    const { slots } = useTooltip()

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

Component.displayName = 'Tooltip.Popover'

export type { ComponentOwnProps as TooltipPopoverOwnProps, ComponentProps as TooltipPopoverProps }
export default Component
