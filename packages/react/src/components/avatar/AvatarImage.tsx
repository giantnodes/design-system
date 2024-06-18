'use client'

import React from 'react'

import type * as Polymophic from '~/utilities/polymorphic'
import { useAvatarContext } from '~/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'img'

type ComponentOwnProps = unknown

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAvatarContext()

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

export type { ComponentOwnProps as AvatarImageOwnProps, ComponentProps as AvatarImageProps }
export default Component
