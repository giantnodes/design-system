import type * as Polymophic from '@/utilities/polymorphic'
import type { ButtonVariantProps } from '@giantnodes/theme'
import type { ButtonProps } from 'react-aria-components'

import { button } from '@giantnodes/theme'
import React from 'react'
import { Button } from 'react-aria-components'

import Spinner from '@/components/spinner/Spinner'

const __ELEMENT_TYPE__ = 'button'

type ComponentOwnProps = ButtonVariantProps & Omit<ButtonProps, 'children'>

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const {
      as,
      children,
      className,
      isLoading = false,
      isDisabled = false,
      color,
      shape,
      size,
      variant,
      ...rest
    } = props

    const Element = as ?? Button

    const slots = React.useMemo(() => button({ color, shape, size, variant }), [color, shape, size, variant])

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
        {isLoading && <Spinner />}

        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as ButtonProps }
export default Component
