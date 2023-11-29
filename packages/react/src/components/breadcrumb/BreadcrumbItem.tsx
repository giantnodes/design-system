import type { Component } from '@/utilities/types'

import { Focusable } from '@ariakit/react'
import React from 'react'

import { useBreadcrumbContext } from '@/components/breadcrumb/use-breadcrumb-context.hook'

export type BreadcrumbItemProps = Component<'li'> & {
  disabled?: boolean
  active?: boolean
}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>((props, ref) => {
  const { as, children, className, disabled, active, ...rest } = props
  const { slots, separator } = useBreadcrumbContext()

  const Component = as || 'li'

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.item({
        class: className,
        disabled,
        active,
      }),
      ...rest,
    }),
    [ref, slots, disabled, active, className, rest]
  )

  return (
    <Component {...getProps()} aria-current={active ? 'page' : undefined}>
      <Focusable>{children}</Focusable>

      {!active && separator && (
        <span aria-hidden="true" className={slots.separator()}>
          {separator}
        </span>
      )}
    </Component>
  )
})

BreadcrumbItem.defaultProps = {
  disabled: false,
  active: false,
}

BreadcrumbItem.displayName = 'Breadcrumb.Item'

export default BreadcrumbItem
