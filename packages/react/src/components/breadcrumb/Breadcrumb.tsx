'use client'

import type { BreadcrumbVariantProps } from '@giantnodes/theme'
import type { BreadcrumbsProps } from 'react-aria-components'
import React from 'react'
import { Breadcrumbs } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { BreadcrumbContext, useBreadcrumb } from '~/components/breadcrumb/use-breadcrumb.hook'

const __ELEMENT_TYPE__ = 'ol'

type ComponentOwnProps<TData extends object> = BreadcrumbsProps<TData> & BreadcrumbVariantProps

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymophic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TData, TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, size, separator, ...rest } = props

    const Element = as ?? Breadcrumbs

    const context = useBreadcrumb({ size, separator })

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

export type { ComponentOwnProps as BreadcrumbOwnProps, ComponentProps as BreadcrumbProps }
export default Component
