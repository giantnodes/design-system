import type * as Polymophic from '@/utilities/polymorphic'
import type { InputVariantProps } from '@giantnodes/theme'
import type { GroupProps } from 'react-aria-components'

import React from 'react'
import { Group } from 'react-aria-components'

import { InputContext, useInput } from '@/components/input/use-input.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = GroupProps & InputVariantProps

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
    const { as, children, className, color, size, variant, ...rest } = props

    const Element = as || Group

    const context = useInput({ color, size, variant })

    const component = React.useMemo<GroupProps>(
      () => ({
        className: context.slots.group({ className: className?.toString() }),
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

export type { ComponentProps as InputGroupProps, ComponentOwnProps as InputGroupOwnProps }
export default Component
