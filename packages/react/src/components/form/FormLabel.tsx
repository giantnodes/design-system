'use client'

import type { LabelProps } from 'react-aria-components'
import React from 'react'
import { Label } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'

const __ELEMENT_TYPE__ = 'label'

type ComponentOwnProps = LabelProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymophic.Ref<TElement>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Label

    const context = useFormGroup()

    const component = React.useMemo<LabelProps>(
      () => ({
        className: context?.slots.label({ className, color: context.status }),
        ...context?.labelProps,
        ...rest,
      }),
      [className, context?.labelProps, context?.slots, context?.status, rest]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as FormLabelOwnProps, ComponentProps as FormLabelProps }
export default Component
