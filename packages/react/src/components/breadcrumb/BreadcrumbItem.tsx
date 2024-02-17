import type { ComponentWithoutAs } from '@/utilities/types'
import type { BreadcrumbProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Breadcrumb as Component } from 'react-aria-components'

import { useBreadcrumbContext } from '@/components/breadcrumb/use-breadcrumb.hook'

export type BreadcrumbItemProps = ComponentWithoutAs<'li'> & ComponentProps

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots, separator } = useBreadcrumbContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.item({ className }),
      ...rest,
    }),
    [ref, slots, className, rest]
  )

  return (
    <Component {...getProps()}>
      {children}

      {separator && (
        <span aria-hidden="true" className={slots.separator()}>
          {separator}
        </span>
      )}
    </Component>
  )
})

BreadcrumbItem.displayName = 'Breadcrumb.Item'

export default BreadcrumbItem
