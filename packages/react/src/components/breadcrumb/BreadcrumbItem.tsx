import type * as Polymophic from '@/utilities/polymorphic'
import type { BreadcrumbProps } from 'react-aria-components'

import React from 'react'
import { Breadcrumb } from 'react-aria-components'

import { useBreadcrumbContext } from '@/components/breadcrumb/use-breadcrumb.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = BreadcrumbProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Breadcrumb

    const { slots, separator } = useBreadcrumbContext()

    const component = React.useMemo<Omit<BreadcrumbProps, 'children'>>(
      () => ({
        className: slots.item({ className }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}

        {separator && (
          <span aria-hidden="true" className={slots.separator()}>
            {separator}
          </span>
        )}
      </Element>
    )
  }
)

export type { ComponentOwnProps as BreadcrumbItemProps }
export default Component
