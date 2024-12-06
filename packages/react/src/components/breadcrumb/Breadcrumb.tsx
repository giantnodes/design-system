'use client'

import type { BreadcrumbVariantProps } from '@giantnodes/theme'
import type { BreadcrumbsProps } from 'react-aria-components'
import React from 'react'
import { Breadcrumbs } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { BreadcrumbContext, useBreadcrumbValue } from '~/components/breadcrumb/use-breadcrumb.hook'

const __ELEMENT_TYPE__ = 'ol'

type ComponentOwnProps<TData extends object> = BreadcrumbsProps<TData> & BreadcrumbVariantProps

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymorphic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = (<TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const { as, children, className, size, separator, ...rest } = props

    const Element = as ?? Breadcrumbs

    const context = useBreadcrumbValue({ size, separator })

    const component = React.useMemo<BreadcrumbsProps<TData>>(
      () => ({
        className: context.slots.base({ className }),
        ...rest,
      }),
      [className, context.slots, rest]
    )

    return (
      <BreadcrumbContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </BreadcrumbContext.Provider>
    )
  }
)

Component.displayName = 'Breadcrumb.Root'

export type { ComponentOwnProps as BreadcrumbOwnProps, ComponentProps as BreadcrumbProps }
export default Component
