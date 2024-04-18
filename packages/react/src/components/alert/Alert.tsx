import type * as Polymophic from '@/utilities/polymorphic'
import type { AlertVariantProps } from '@giantnodes/theme'

import React from 'react'

import AlertBody from '@/components/alert/AlertBody'
import AlertHeading from '@/components/alert/AlertHeading'
import AlertItem from '@/components/alert/AlertItem'
import AlertList from '@/components/alert/AlertList'
import AlertText from '@/components/alert/AlertText'
import { AlertContext, useAlert } from '@/components/alert/use-alert.hook'

const __ELEMENT_TYPE__ = 'div'

type ComponentOwnProps = AlertVariantProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, color, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const context = useAlert({ color })

    const component = React.useMemo(
      () => ({
        className: context.slots.base({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <AlertContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </AlertContext.Provider>
    )
  }
)

export type { ComponentOwnProps as AlertProps }
export default Object.assign(Component, {
  Body: AlertBody,
  Heading: AlertHeading,
  Item: AlertItem,
  List: AlertList,
  Text: AlertText,
})
