'use client'

import type { ComboBoxVariantProps } from '@giantnodes/theme'
import type { ComboBoxProps } from 'react-aria-components'
import React from 'react'
import { ComboBox } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { ComboBoxContext, useComboBoxValue } from '~/components/combo-box/use-combo-box.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps<TData extends object> = ComboBoxProps<TData> & ComboBoxVariantProps

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymorphic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = (<TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const { as, children, className, size, status, ...rest } = props

    const Element = as ?? ComboBox

    const context = useComboBoxValue({ size, status })

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

Component.displayName = 'ComboBox.Root'

export type { ComponentOwnProps as ComboBoxOwnProps, ComponentProps as ComboBoxProps }
export default Component
