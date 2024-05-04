import type * as Polymophic from '@/utilities/polymorphic'
import type { AvatarVariantProps } from '@giantnodes/theme'

import React from 'react'

import { useAvatarContext } from '@/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = Pick<AvatarVariantProps, 'color'>

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
    const { as, children, className, color, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const { slots } = useAvatarContext()

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: slots.notification({ className, color }),
        ...rest,
      }),
      [className, color, rest, slots]
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
