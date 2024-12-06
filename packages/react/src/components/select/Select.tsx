'use client'

import type { SelectVariantProps } from '@giantnodes/theme'
import type { ButtonProps, ListBoxProps, PopoverProps, SelectProps } from 'react-aria-components'
import React from 'react'
import { Button, ListBox, Popover, Select } from 'react-aria-components'

import type * as Polymorphic from '~/utilities/polymorphic'
import type { Override } from '~/utilities/types'
import { useFormGroup } from '~/components/form/use-form-group.hook'
import SelectValue from '~/components/select/SelectValue'
import { SelectContext, useSelectValue } from '~/components/select/use-select.hook'

const __ELEMENT_TYPE__ = 'select'

type OverriddenSelectProps<TElement extends object> = Override<
  SelectProps<TElement>,
  {
    children?: React.ReactNode | ((item: TElement) => React.ReactNode)
  }
>

type OverriddenListBoxProps<TElement extends object> = Override<
  ListBoxProps<TElement>,
  {
    items?: Iterable<TElement> | null
  }
>

type ComponentOwnProps<TData extends object> = SelectVariantProps &
  OverriddenSelectProps<TData> &
  OverriddenListBoxProps<TData> & {
    placement?: 'top' | 'bottom'
    icon?: React.ReactNode
  }

type ComponentProps<
  TData extends object,
  TElement extends React.ElementType = typeof __ELEMENT_TYPE__,
> = Polymorphic.ComponentPropsWithRef<TElement, ComponentOwnProps<TData>>

type ComponentType = (<TData extends object, TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TData, TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef(
  <TData extends object, TElement extends React.ElementType>(
    props: ComponentProps<TData, TElement>,
    ref: Polymorphic.Ref<TElement>
  ) => {
    const {
      as,
      children,
      className,
      icon,
      items,
      placeholder,
      behavior,
      mode,
      placement,
      size,
      status,
      onChange,
      onSelectionChange,
      ...rest
    } = props

    const Element = as ?? Select

    const group = useFormGroup()

    const context = useSelectValue({
      ref: (group?.ref as React.RefObject<HTMLInputElement> | undefined) ?? ref,
      name: group?.name,
      behavior,
      mode,
      size,
      status,
      onSelectionChange,
      onChange: group?.onChange ?? onChange,
    })

    const select = React.useMemo<SelectProps<TData>>(
      () => ({
        name: group?.name,
        placeholder,
        onChange: group?.onChange,
        onBlur: group?.onBlur,
        onSelectionChange: context.onSelect,
        className: context.slots.select({ className: className?.toString() }),
        ...group?.fieldProps,
        ...rest,
      }),
      [
        className,
        context.onSelect,
        context.slots,
        group?.fieldProps,
        group?.name,
        group?.onBlur,
        group?.onChange,
        placeholder,
        rest,
      ]
    )

    const button = React.useMemo<ButtonProps>(
      () => ({
        className: context.slots.button(),
      }),
      [context.slots]
    )

    const popover = React.useMemo<PopoverProps>(
      () => ({
        placement,
        className: context.slots.popover(),
      }),
      [context.slots, placement]
    )

    const listbox = React.useMemo<ListBoxProps<TData>>(
      () => ({
        items: items ?? undefined,
        selectionMode: mode,
        selectionBehavior: behavior,
        className: context.slots.list(),
      }),
      [behavior, context.slots, items, mode]
    )

    const IconComponent = React.useMemo(() => {
      if (!icon) {
        return (
          <svg
            aria-hidden="true"
            className={context.slots.icon()}
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        )
      }

      if (!React.isValidElement<HTMLElement>(icon)) {
        return icon
      }

      return React.cloneElement(icon, { className: context.slots.icon() })
    }, [context.slots, icon])

    return (
      <SelectContext.Provider value={context}>
        <Element {...select} ref={group?.ref ?? ref}>
          <Button {...button}>
            <SelectValue />

            {IconComponent}
          </Button>

          <Popover {...popover}>
            <ListBox {...listbox}>{children}</ListBox>
          </Popover>
        </Element>
      </SelectContext.Provider>
    )
  }
)

Component.displayName = 'Select.Root'

export type { ComponentOwnProps as SelectOwnProps, ComponentProps as SelectProps }
export default Component
