'use client'

import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useAvatar } from '~/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'img'

type ComponentOwnProps = object

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
    const { as, children, className, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAvatar()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context?.slots.img({ className }),
        ...rest,
      }),
      [className, context?.slots, rest]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Avatar.Image'

export type { ComponentOwnProps as AvatarImageOwnProps, ComponentProps as AvatarImageProps }
export default Component
