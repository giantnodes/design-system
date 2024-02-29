import type { ComponentWithoutAs } from '@/utilities/types'
import type { PopoverProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Popover as Component } from 'react-aria-components'

import { useMenuContext } from '@/components/menu/use-menu.hook'

export type MenuPopoverProps = ComponentWithoutAs<'div'> & ComponentProps

const MenuPopover = React.forwardRef<HTMLDivElement, MenuPopoverProps>((props, ref) => {
  const { children, className, ...rest } = props
  const { slots } = useMenuContext()

  const getPopoverProps = React.useCallback(
    () => ({
      ref,
      className: slots.popover({
        class: className,
      }),
      ...rest,
    }),
    [className, ref, rest, slots]
  )

  return <Component {...getPopoverProps()}>{children}</Component>
})

export default MenuPopover
