'use client'

import type { ButtonProps } from 'react-aria-components'
import React from 'react'
import { Button } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useTooltip } from '~/components/tooltip/use-tooltip.hook'

const __ELEMENT_TYPE__ = 'button'

type ComponentOwnProps = ButtonProps

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

    const Element = as ?? Button

    const { slots } = useTooltip()

    const component = React.useMemo<ButtonProps>(
      () => ({
        className: slots.trigger({ className: className?.toString() }),
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

export type { ComponentOwnProps as TooltipTriggerOwnProps, ComponentProps as TooltipTriggerProps }
export default Component
