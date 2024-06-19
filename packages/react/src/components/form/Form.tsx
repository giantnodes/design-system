'use client'

import type { FormVariantProps } from '@giantnodes/theme'
import type { FormProps } from 'react-aria-components'
import React from 'react'
import { form } from '@giantnodes/theme'
import { Form } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'form'

type ComponentOwnProps = FormProps & FormVariantProps

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
    const { as, children, className, status, ...rest } = props

    const Element = as ?? Form

    const slots = React.useMemo(() => form({ status }), [status])

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
