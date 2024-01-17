import type { ComponentWithoutAs } from '@/utilities/types'
import type { TextProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Text as Component } from 'react-aria-components'

import { useFormContext } from '@/components/form/use-form.context'

export type FormCaptionProps = ComponentWithoutAs<'span'> & ComponentProps

const FormCaption = React.forwardRef<HTMLSpanElement, FormCaptionProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useFormContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.caption({ className }),
      ...rest,
    }),
    [ref, className, slots, rest]
  )

  return (
    <Component slot="description" {...getProps()}>
      {children}
    </Component>
  )
})

FormCaption.displayName = 'Form.Caption'

export default FormCaption
