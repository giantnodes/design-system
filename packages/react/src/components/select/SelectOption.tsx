import type * as Polymophic from '@/utilities/polymorphic'
import type { ListBoxItemProps } from 'react-aria-components'

import React from 'react'
import { ListBoxItem } from 'react-aria-components'

import { useSelectContext } from './use-select.hook'

const __ELEMENT_TYPE__ = 'option'

type ComponentOwnProps = ListBoxItemProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? ListBoxItem

    const { slots } = useSelectContext()

    const component = React.useMemo<ListBoxItemProps>(
      () => ({
        className: slots.option({ className: className?.toString() }),
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

export type { ComponentOwnProps as SelectOptionProps }
export default Component
