import type * as Polymophic from '@/utilities/polymorphic'
import type { AvatarVariantProps } from '@giantnodes/theme'

import React from 'react'

import { useAvatarContext } from '@/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = Pick<AvatarVariantProps, 'color'>

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
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

export type { ComponentOwnProps as AvatarNotificationProps }
export default Component
