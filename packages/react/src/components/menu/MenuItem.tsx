import type { ComponentWithoutAs } from '@/utilities/types'
import type { MenuItemProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { MenuItem as Component } from 'react-aria-components'

import { useMenuContext } from '@/components/menu/use-menu.hook'

export type MenuPopoverItemProps = ComponentWithoutAs<'div'> & ComponentProps

const MenuItem = React.forwardRef<HTMLDivElement, MenuPopoverItemProps>((props, ref) => {
  const { children, className, ...rest } = props
  const { slots } = useMenuContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.item({
        class: className,
      }),
      ...rest,
    }),
    [className, ref, rest, slots]
  )

  return <Component {...getProps()}>{children}</Component>
})

MenuItem.displayName = 'Menu.Item'

export default MenuItem
