'use client'

import type { FormVariantProps } from '@giantnodes/theme'
import type { FormProps } from 'react-aria-components'
import React from 'react'
import { form } from '@giantnodes/theme'
import { Form } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'form'

type ComponentOwnProps = FormProps & FormVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, color, ...rest } = props

    const Element = as ?? Form

    const slots = React.useMemo(() => form({ color }), [color])

    const component = React.useMemo<FormProps>(
      () => ({
        className: slots.form({ className }),
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

export type { ComponentOwnProps as FormOwnProps, ComponentProps as FormProps }
export default Component
