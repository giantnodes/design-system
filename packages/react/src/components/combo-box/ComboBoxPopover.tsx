'use client'

import type { PopoverProps } from 'react-aria-components'
import React from 'react'
import { Popover } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useComboBox } from '~/components/combo-box/use-combo-box.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = PopoverProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Popover

    const { slots } = useComboBox()

    const component = React.useMemo<PopoverProps>(
      () => ({
        className: slots.popover({ className: className?.toString() }),
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

export type { ComponentOwnProps as ComboBoxPopoverOwnProps, ComponentProps as ComboBoxPopoverProps }
export default Component
