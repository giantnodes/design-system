import type * as Polymophic from '@/utilities/polymorphic'
import type { BreadcrumbVariantProps } from '@giantnodes/theme'
import type { BreadcrumbsProps } from 'react-aria-components'

import React from 'react'
import { Breadcrumbs } from 'react-aria-components'

import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem'
import { BreadcrumbContext, useBreadcrumb } from '@/components/breadcrumb/use-breadcrumb.hook'

const __ELEMENT_TYPE__ = 'ol'

type ComponentOwnProps<D extends object> = BreadcrumbsProps<D> & BreadcrumbVariantProps

type ComponentProps<D extends object, T extends React.ElementType> = Polymophic.ComponentPropsWithRef<
  T,
  ComponentOwnProps<D>
>

type ComponentType = <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<D, T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <D extends object, T extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<D, T>,
    ref: Polymophic.Ref<T>
  ) => {
    const { as, children, className, size, separator, ...rest } = props

    const Element = as ?? Breadcrumbs

    const context = useBreadcrumb({ size, separator })

    const component = React.useMemo<BreadcrumbsProps<D>>(
      () => ({
        className: context.slots.base({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
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

export type { ComponentOwnProps as BreadcrumbProps }
export default Object.assign(Component, {
  Item: BreadcrumbItem,
})
