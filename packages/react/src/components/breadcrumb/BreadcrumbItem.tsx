'use client'

import type { BreadcrumbProps } from 'react-aria-components'
import React from 'react'
import { Breadcrumb, Link } from 'react-aria-components'

import type * as Polymophic from '~/utilities/polymorphic'
import { useBreadcrumb } from '~/components/breadcrumb/use-breadcrumb.hook'
import { cn } from '~/utilities'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = BreadcrumbProps & {
  href?: string
}

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymophic.Ref<TElement>) => {
    const { as, children, className, href, ...rest } = props

    const Element = as ?? Breadcrumb

    const { slots, separator } = useBreadcrumb()

    const component = React.useMemo<Omit<BreadcrumbProps, 'children'>>(
      () => ({
        className: slots.item({ className: cn(className) }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        <Link href={href}>{children}</Link>

        {separator && (
          <span aria-hidden="true" className={slots.separator()} data-slot="separator">
            {separator}
          </span>
        )}
      </Element>
    )
  }
)

export type { ComponentOwnProps as BreadcrumbItemOwnProps, ComponentProps as BreadcrumbItemProps }
export default Component
