'use client'

import type { SelectValueProps } from 'react-aria-components'
import React from 'react'
import { SelectStateContext, SelectValue } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useSelect } from '~/components/select/use-select.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps<TData extends object> = SelectValueProps<TData>

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
    const { as, className, ...rest } = props

    const Element = as ?? SelectValue

    const { slots } = useSelect()
    const state = React.useContext(SelectStateContext)

    const component = React.useMemo<SelectValueProps<TData>>(
      () => ({
        className: slots.value({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    const render = React.useMemo(() => {
      if (state?.selectedItem?.textValue) return state.selectedItem.textValue

      return <Element {...component} ref={ref} />
    }, [Element, component, ref, state?.selectedItem?.textValue])

    return render
  }
)

Component.displayName = 'Select.Value'

export type { ComponentOwnProps as SelectValueOwnProps, ComponentProps as SelectValueProps }
export default Component
