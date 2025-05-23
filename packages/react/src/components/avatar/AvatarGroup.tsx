'use client'

import type { AvatarVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { AvatarContext, useAvatarValue } from '~/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = AvatarVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, color, radius, size, zoomed, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAvatarValue({ color, radius, size, zoomed })

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

Component.displayName = 'Avatar.Group'

export type { ComponentOwnProps as AvatarGroupOwnProps, ComponentProps as AvatarGroupProps }
export default Component
