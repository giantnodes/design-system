import type * as Polymophic from '@/utilities/polymorphic'

import clsx from 'clsx'
import React from 'react'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'

const __ELEMENT_TYPE__ = 'span'

type FeedbackType = 'success' | 'warning' | 'error'

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

    const { slots, status, feedback } = useFormGroupContext()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.feedback({
          class: clsx(className, { hidden: type !== feedback }),
          status,
        }),
        ...rest,
      }),
      [className, feedback, rest, slots, status, type]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as FormFeedbackOwnProps, ComponentProps as FormFeedbackProps, FeedbackType }
export default Component
