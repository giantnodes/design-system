import type { UseMenuProps } from '@/components/menu/use-menu.hook'
import type { ComponentWithoutAs } from '@/utilities/types'
import type { MenuTriggerProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { MenuTrigger as Component } from 'react-aria-components'

import MenuItem from '@/components/menu/MenuItem'
import MenuList from '@/components/menu/MenuList'
import MenuPopover from '@/components/menu/MenuPopover'
import { MenuContext, useMenu } from '@/components/menu/use-menu.hook'

export type MenuProps = ComponentWithoutAs<'div'> & ComponentProps & UseMenuProps

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { children, className, size, status, variant, ...rest } = props

  const context = useMenu({ size, status, variant })

  const getProps = React.useCallback(
    () => ({
      ref,
      ...rest,
    }),
    [ref, rest]
  )

  return (
    <MenuContext.Provider value={context}>
      <Component {...getProps()}>{children}</Component>
    </MenuContext.Provider>
  )
})

Menu.displayName = 'Menu'

export default Object.assign(Menu, {
  Popover: MenuPopover,
  List: MenuList,
  Item: MenuItem,
})
