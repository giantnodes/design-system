'use client'

import type { ProgressVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { ProgressContext, useProgressValue } from '~/components/progress/use-progress.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = ProgressVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, radius, size, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useProgressValue({ radius, size })

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

Component.displayName = 'Progress.Root'

export type { ComponentOwnProps as ProgressOwnProps, ComponentProps as ProgressProps }
export default Component
