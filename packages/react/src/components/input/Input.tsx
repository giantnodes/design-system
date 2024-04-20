import type * as Polymophic from '@/utilities/polymorphic'
import type { InputVariantProps } from '@giantnodes/theme'

import React from 'react'

import InputAddon from '@/components/input/InputAddon'
import InputControl from '@/components/input/InputControl'
import { InputContext, useInput } from '@/components/input/use-input.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = InputVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, status, size, variant, transparent, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useInput({ status, size, variant, transparent })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.input({ className }),
        ...rest,
      }),
      [className, context.slots, rest]
    )

    return (
      <InputContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </InputContext.Provider>
    )
  }
)

export type { ComponentOwnProps as InputProps }
export default Object.assign(Component, {
  Addon: InputAddon,
  Control: InputControl,
})
