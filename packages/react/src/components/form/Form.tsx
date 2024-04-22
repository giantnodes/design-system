import type * as Polymophic from '@/utilities/polymorphic'
import type { FormVariantProps } from '@giantnodes/theme'
import type { FormProps } from 'react-aria-components'

import { form } from '@giantnodes/theme'
import React from 'react'
import { Form } from 'react-aria-components'

import FormCaption from '@/components/form/FormCaption'
import FormFeedback from '@/components/form/FormFeedback'
import FormGroup from '@/components/form/FormGroup'
import FormLabel from '@/components/form/FormLabel'

const __ELEMENT_TYPE__ = 'form'

type ComponentOwnProps = FormProps & FormVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
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

export type { ComponentOwnProps as FormProps }
export default Object.assign(Component, {
  Caption: FormCaption,
  Feedback: FormFeedback,
  Group: FormGroup,
  Label: FormLabel,
})
