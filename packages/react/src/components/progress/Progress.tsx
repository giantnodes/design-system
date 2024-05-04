import type * as Polymophic from '@/utilities/polymorphic'
import type { ProgressVariantProps } from '@giantnodes/theme'

import React from 'react'

import ProgressBar from '@/components/progress/ProgressBar'
import { ProgressContext, useProgress } from '@/components/progress/use-progress.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = ProgressVariantProps

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
    const { as, children, className, radius, size, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useProgress({ radius, size })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.base({ className }),
        ...rest,
      }),
      [className, context.slots, rest]
    )

    return (
      <ProgressContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </ProgressContext.Provider>
    )
  }
)

export type { ComponentOwnProps as ProgressOwnProps, ComponentProps as ProgressProps }
export default Object.assign(Component, {
  Bar: ProgressBar,
})
