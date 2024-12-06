'use client'

import type { ListBoxItemProps } from 'react-aria-components'
import React from 'react'
import { ListBoxItem } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useSelect } from '~/components/select/use-select.hook'

const __ELEMENT_TYPE__ = 'option'

type ComponentOwnProps = ListBoxItemProps

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

    const Element = as ?? ListBoxItem

    const { slots } = useSelect()

    const component = React.useMemo<ListBoxItemProps>(
      () => ({
        className: slots.option({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {({ isSelected }: { isSelected: boolean }) => (
          <>
            {children}

            {isSelected && (
              <svg
                aria-hidden="true"
                className={slots.check()}
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            )}
          </>
        )}
      </Element>
    )
  }
)

Component.displayName = 'Select.Option'

export type { ComponentOwnProps as SelectOptionOwnProps, ComponentProps as SelectOptionProps }
export default Component
