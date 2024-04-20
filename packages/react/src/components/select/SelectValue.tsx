import type * as Polymophic from '@/utilities/polymorphic'
import type { SelectValueProps } from 'react-aria-components'

import React from 'react'
import { SelectStateContext, SelectValue } from 'react-aria-components'

import { useSelectContext } from '@/components/select/use-select.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps<D extends object> = SelectValueProps<D>

type ComponentProps<D extends object, T extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  T,
  ComponentOwnProps<D>
>

type ComponentType = <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<D, T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<D, T>,
    ref: Polymophic.Ref<T>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? SelectValue

    const { slots } = useSelectContext()
    const { selectedItem } = React.useContext(SelectStateContext)

    const component = React.useMemo<SelectValueProps<D>>(
      () => ({
        className: slots.placeholder({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    const render = React.useMemo(() => {
      if (selectedItem?.textValue) return selectedItem.textValue

      return <Element {...component} ref={ref} />
    }, [Element, component, ref, selectedItem.textValue])

    return render
  }
)

export type { ComponentOwnProps as SelectValueProps }
export default Component
