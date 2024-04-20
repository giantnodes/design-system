import type * as Polymophic from '@/utilities/polymorphic'
import type { AvatarVariantProps } from '@giantnodes/theme'

import React from 'react'

import { AvatarContext, useAvatar } from '@/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = AvatarVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, color, radius, size, zoomed, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAvatar({ color, radius, size, zoomed })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.group({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <AvatarContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </AvatarContext.Provider>
    )
  }
)

export type { ComponentOwnProps as AvatarGroupProps }
export default Component
