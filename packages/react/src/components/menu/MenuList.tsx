import type { ComponentWithoutAs } from '@/utilities/types'
import type { MenuProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Menu as Component } from 'react-aria-components'

import { useMenuContext } from '@/components/menu/use-menu.hook'

export type MenuPopoverProps<T extends object> = ComponentWithoutAs<'div'> & ComponentProps<T>

const MenuList: <T extends object>(props: MenuPopoverProps<T>) => React.ReactNode = (() =>
  React.forwardRef((props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { children, className, ...rest } = props
    const { slots } = useMenuContext()

    const getMenuProps = React.useCallback(
      () => ({
        ref,
        className: slots.list(),
        ...rest,
      }),
      [ref, rest, slots]
    )

    return <Component {...getMenuProps()}>{children}</Component>
  }))()

export default MenuList
