import type * as Polymophic from '@/utilities/polymorphic'
import type { ButtonVariantProps } from '@giantnodes/theme'
import type { ButtonProps } from 'react-aria-components'

import { button } from '@giantnodes/theme'
import React from 'react'
import { Button } from 'react-aria-components'

import Spinner from '@/components/spinner/Spinner'

const __ELEMENT_TYPE__ = 'button'

type ComponentOwnProps = {
  isLoading?: boolean
} & ButtonProps &
  ButtonVariantProps

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
    const { as, children, className, isLoading = false, isDisabled = false, color, size, ...rest } = props

    const Element = as ?? Button

    const slots = React.useMemo(() => button({ color, size }), [color, size])

    const component = React.useMemo<ButtonProps>(
      () => ({
        'data-loading': isLoading,
        className: slots.button({ className: className?.toString() }),
        isDisabled: isLoading || isDisabled,
        ...rest,
      }),
      [className, isDisabled, isLoading, rest, slots]
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

export type { ComponentOwnProps as ButtonOwnProps, ComponentProps as ButtonProps }
export default Component
