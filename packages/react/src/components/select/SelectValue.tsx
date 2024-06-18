'use client'

import type * as Polymophic from '@/utilities/polymorphic'
import type { SelectValueProps } from 'react-aria-components'

import React from 'react'
import { SelectStateContext, SelectValue } from 'react-aria-components'

import { useSelectContext } from '@/components/select/use-select.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps<TData extends object> = SelectValueProps<TData>

type ComponentProps<TData extends object, TElement extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps<TData>
>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TData, TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? SelectValue

    const { slots } = useSelectContext()
    const { selectedItem } = React.useContext(SelectStateContext)

    const component = React.useMemo<SelectValueProps<TData>>(
      () => ({
        className: slots.placeholder({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    const render = React.useMemo(() => {
      if (selectedItem?.textValue) return selectedItem.textValue

      return <Element {...component} ref={ref} />
    }, [Element, component, ref, selectedItem?.textValue])

    return render
  }
)

export type { ComponentOwnProps as SelectValueOwnProps, ComponentProps as SelectValueProps }
export default Component
