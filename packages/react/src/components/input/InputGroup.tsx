'use client'

import type { InputVariantProps } from '@giantnodes/theme'
import type { GroupProps } from 'react-aria-components'
import React from 'react'
import { Group } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'
import { InputContext, useInputValue } from '~/components/input/use-input.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = GroupProps & InputVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, color, size, shape, variant, ...rest } = props

    const Element = as ?? Group

    const group = useFormGroup()
    const context = useInputValue({ color: color ?? group?.status, size, shape, variant })

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

export type { ComponentProps as InputProps, ComponentOwnProps as InputOwnProps }
export default Component
