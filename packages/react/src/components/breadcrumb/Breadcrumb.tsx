import type { BreadcrumbItemProps } from '@/components/breadcrumb/BreadcrumbItem'
import type { UseBreadcrumbProps } from '@/components/breadcrumb/use-breadcrumb.hook'
import type { Component } from '@/utilities/types'

import React from 'react'

import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem'
import { BreadcrumbProvider } from '@/components/breadcrumb/use-breadcrumb-context.hook'
import { useBreadcrumb } from '@/components/breadcrumb/use-breadcrumb.hook'

export type BreadcrumbProps = Component<'ol'> & UseBreadcrumbProps

const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>((props, ref) => {
  const { as, children, disabled, className, ...rest } = props
  const context = useBreadcrumb(props)

  const Component = as || 'ol'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: context.slots.base({
        class: className,
        disabled,
      }),
      ...rest,
    }),
    [ref, context.slots, disabled, className, rest]
  )

  return (
    <BreadcrumbProvider value={context}>
      <nav aria-label="breadcrumb">
        <Component {...getProps()}>
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement<BreadcrumbItemProps>(child)) {
              return child
            }

            return React.cloneElement(child, {
              ...child.props,
              active: index === React.Children.count(children) - 1,
            })
          })}
        </Component>
      </nav>
    </BreadcrumbProvider>
  )
})

Breadcrumb.displayName = 'Breadcrumb'

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
})
