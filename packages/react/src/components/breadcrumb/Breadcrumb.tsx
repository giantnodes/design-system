import type { UseBreadcrumbProps } from '@/components/breadcrumb/use-breadcrumb.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { BreadcrumbsProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Breadcrumbs as Component } from 'react-aria-components'

import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem'
import { BreadcrumbProvider } from '@/components/breadcrumb/use-breadcrumb-context.hook'
import { useBreadcrumb } from '@/components/breadcrumb/use-breadcrumb.hook'

export type BreadcrumbProps<T extends object> = ComponentWithoutAs<'ol'> & ComponentProps<T> & UseBreadcrumbProps

const Breadcrumb: <T extends object>(props: BreadcrumbProps<T>) => React.ReactNode = (() =>
  React.forwardRef((props, ref: React.ForwardedRef<HTMLOListElement>) => {
    const { children, disabled, className, size, separator, ...rest } = props

    const context = useBreadcrumb({ size, separator })

    const getProps = React.useCallback(
      () => ({
        ref,
        className: context.slots.base({ className }),
        ...rest,
      }),
      [ref, context.slots, className, rest]
    )

    return (
      <BreadcrumbProvider value={context}>
        <Component {...getProps()}>{children}</Component>
      </BreadcrumbProvider>
    )
  }))()

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
})
