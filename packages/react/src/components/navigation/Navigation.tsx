import type * as Polymophic from '@/utilities/polymorphic'
import type { NavigationVariantProps } from '@giantnodes/theme'

import React from 'react'

import NavigationBrand from '@/components/navigation/NavigationBrand'
import NavigationDivider from '@/components/navigation/NavigationDivider'
import NavigationItem from '@/components/navigation/NavigationItem'
import NavigationLink from '@/components/navigation/NavigationLink'
import NavigationSegment from '@/components/navigation/NavigationSegment'
import NavigationTitle from '@/components/navigation/NavigationTitle'
import NavigationTrigger from '@/components/navigation/NavigationTrigger'
import { NavigationContext, useNavigation } from '@/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'nav'

type ComponentOwnProps = NavigationVariantProps

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
    const { as, children, className, orientation, position, size, variant, isBordered, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useNavigation({ orientation, position, size, variant, isBordered })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.navigation({ className }),
        ...rest,
      }),
      [className, context.slots, rest]
    )

    return (
      <NavigationContext.Provider value={context}>
        <Element {...component} ref={ref}>
          <div className={context.slots.wrapper()}>{children}</div>
        </Element>
      </NavigationContext.Provider>
    )
  }
)

export type { ComponentOwnProps as NavigationOwnProps, ComponentProps as NavigationProps }
export default Object.assign(Component, {
  Brand: NavigationBrand,
  Divider: NavigationDivider,
  Item: NavigationItem,
  Link: NavigationLink,
  Segment: NavigationSegment,
  Title: NavigationTitle,
  Trigger: NavigationTrigger,
})
