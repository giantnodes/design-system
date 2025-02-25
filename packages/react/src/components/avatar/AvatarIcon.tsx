'use client'

import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useAvatar } from '~/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = {
  icon: React.ReactNode
}

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
    const { as, className, icon, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAvatar()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context?.slots.icon({ className }),
        ...rest,
      }),
      [className, context?.slots, rest]
    )

    return (
      <Element {...component} ref={ref}>
        {icon}
      </Element>
    )
  }
)

Component.displayName = 'Avatar.Icon'

export type { ComponentOwnProps as AvatarIconOwnProps, ComponentProps as AvatarIconProps }
export default Component
