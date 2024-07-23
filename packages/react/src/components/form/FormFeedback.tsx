'use client'

import React from 'react'

import type { FeedbackType } from '~/components/form/use-form-group.hook'
import type * as Polymophic from '~/utilities/polymorphic'
import { useFormGroupContext } from '~/components/form/use-form-group.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = {
  type: FeedbackType
}

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
    const { as, children, className, type, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useFormGroupContext()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context?.slots.feedback({
          class: cn(className, { hidden: type !== context.feedback }),
          color: context.status,
        }),
        ...rest,
      }),
      [className, context?.feedback, context?.slots, context?.status, rest, type]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as FormFeedbackOwnProps, ComponentProps as FormFeedbackProps }
export default Component
