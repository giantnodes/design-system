'use client'

import type { AvatarVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useAvatar } from '~/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = Pick<AvatarVariantProps, 'color'>

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, color, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAvatar()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context?.slots.notification({ className, color }),
        ...rest,
      }),
      [className, color, context?.slots, rest]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as AvatarNotificationOwnProps, ComponentProps as AvatarNotificationProps }
export default Component
