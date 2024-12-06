'use client'

import type { ToggleVariantProps } from '@giantnodes/theme'
import type { SwitchProps } from 'react-aria-components'
import React from 'react'
import { toggle } from '@giantnodes/theme'
import { Switch } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import { useFormGroup } from '~/components/form/use-form-group.hook'

const __ELEMENT_TYPE__ = 'label'

type ComponentOwnProps = SwitchProps & ToggleVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, className, color, size, ...rest } = props

    const Element = as ?? Switch

    const group = useFormGroup()

    const slots = React.useMemo(() => toggle({ color, size }), [color, size])

    const component = React.useMemo<SwitchProps>(
      () => ({
        className: slots.label({ className: className?.toString() }),
        name: group?.name,
        ...group?.fieldProps,
        ...rest,
      }),
      [className, group?.fieldProps, group?.name, rest, slots]
    )

    return (
      <Element {...component} ref={(group?.ref as React.RefObject<HTMLLabelElement> | undefined) ?? ref}>
        <div className={slots.container()}>
          <span className={slots.circle()} />
        </div>
      </Element>
    )
  }
)

export type { ComponentOwnProps as SwitchOwnProps, ComponentProps as SwitchProps }
export default Component
