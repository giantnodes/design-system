import type * as Polymophic from '@/utilities/polymorphic'
import type { ComboBoxVariantProps } from '@giantnodes/theme'
import type { ComboBoxProps } from 'react-aria-components'

import React from 'react'
import { ComboBox } from 'react-aria-components'

import ComboBoxItem from '@/components/combo-box/ComboBoxItem'
import ComboBoxList from '@/components/combo-box/ComboBoxList'
import ComboBoxPopover from '@/components/combo-box/ComboBoxPopover'
import { ComboBoxContext, useComboBox } from '@/components/combo-box/use-combo-box.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = ComboBoxProps<TData> & ComboBoxVariantProps

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymophic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TData, TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, size, status, ...rest } = props

    const Element = as || ComboBox

    const context = useComboBox({ size, status })

    const component = React.useMemo<ComboBoxProps<TData>>(
      () => ({
        className: context.slots.combobox({ className: className?.toString() }),
        ...rest,
      }),
      [className, context.slots, rest]
    )

    return (
      <ComboBoxContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </ComboBoxContext.Provider>
    )
  }
)

export type { ComponentOwnProps as ComboBoxOwnProps, ComponentProps as ComboBoxProps }
export default Object.assign(Component, {
  Popover: ComboBoxPopover,
  List: ComboBoxList,
  Item: ComboBoxItem,
})