'use client'

import type { ButtonVariantProps } from '@giantnodes/theme'
import type { ButtonProps } from 'react-aria-components'
import React from 'react'
import { button } from '@giantnodes/theme'
import { Button } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import Spinner from '~/components/spinner/Spinner'

const __ELEMENT_TYPE__ = 'button'

type ComponentOwnProps = ButtonProps &
  ButtonVariantProps & {
    isLoading?: boolean
  }

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
    const { as, children, className, block, color, size, disabled, isLoading, isDisabled, ...rest } = props

    const Element = as ?? Button
    const slots = React.useMemo(() => button({ block, color, size }), [block, color, size])

    const component = React.useMemo<ButtonProps>(
      () => ({
        'data-loading': isLoading,
        className: slots.button({ className: className?.toString() }),
        isDisabled: disabled ?? isDisabled ?? isLoading,
        ...rest,
      }),
      [className, disabled, isDisabled, isLoading, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        <>
          {isLoading && <Spinner size={size} />}

          {children}
        </>
      </Element>
    )
  }
)

Component.displayName = 'Button'

export type { ComponentOwnProps as ButtonOwnProps, ComponentProps as ButtonProps }
export default Component
