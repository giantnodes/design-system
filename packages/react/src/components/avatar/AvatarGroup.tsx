'use client'

import type { AvatarVariantProps } from '@giantnodes/theme'
import React from 'react'

import type * as Polymophic from '~/utilities/polymorphic'
import { AvatarContext, useAvatarValue } from '~/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = AvatarVariantProps

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

export type { ComponentOwnProps as AvatarGroupOwnProps, ComponentProps as AvatarGroupProps }
export default Component
