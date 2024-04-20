import type * as Polymophic from '@/utilities/polymorphic'
import type { NavigationVariantProps } from '@giantnodes/theme'

import React from 'react'

import NavigationBrand from '@/components/navigation/NavigationBrand'
import NavigationContent from '@/components/navigation/NavigationContent'
import NavigationDivider from '@/components/navigation/NavigationDivider'
import NavigationItem from '@/components/navigation/NavigationItem'
import NavigationLink from '@/components/navigation/NavigationLink'
import NavigationPortal from '@/components/navigation/NavigationPortal'
import NavigationSegment from '@/components/navigation/NavigationSegment'
import NavigationTitle from '@/components/navigation/NavigationTitle'
import NavigationTrigger from '@/components/navigation/NavigationTrigger'
import { NavigationContext, useNavigation } from '@/components/navigation/use-navigation.hook'

const __ELEMENT_TYPE__ = 'nav'

type ComponentOwnProps = NavigationVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, position, size, orientation, variant, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useNavigation({ position, size, orientation, variant })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.base({ className }),
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

export type { ComponentOwnProps as NavigationProps }
export default Object.assign(Component, {
  Brand: NavigationBrand,
  Content: NavigationContent,
  Divider: NavigationDivider,
  Item: NavigationItem,
  Link: NavigationLink,
  Portal: NavigationPortal,
  Segment: NavigationSegment,
  Title: NavigationTitle,
  Trigger: NavigationTrigger,
})
