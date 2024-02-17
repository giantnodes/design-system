import type { UseSelectProps } from '@/components/select/use-select.hook'
import type { SelectProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Button, Select as Component, ListBox, Popover, SelectValue } from 'react-aria-components'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'
import SelectOption from '@/components/select/SelectOption'
import { SelectContext, useSelect } from '@/components/select/use-select.hook'

export type SelectProps<T extends object> = ComponentProps<T> &
  UseSelectProps<T> & {
    placement?: 'top' | 'bottom'
  }

const Select: <T extends object>(props: SelectProps<T>) => React.ReactNode = (() =>
  React.forwardRef((props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { children, className, behavior, mode, placement, onChange, onSelectionChange, ...rest } = props

    const group = useFormGroupContext()

    const context = useSelect({
      ref: group.ref,
      behavior,
      mode,
      name: group?.name,
      onSelectionChange,
      onChange: group?.onChange ?? onChange,
    })

    const getProps = React.useCallback(
      () => ({
        ...rest,
        ...group?.fieldProps,
        ref: group?.ref ?? ref,
        name: group?.name,
        onSelectionChange: context.onSelect,
        className: context.slots.select(),
      }),
      [context.onSelect, context.slots, group?.fieldProps, group?.name, group?.ref, ref, rest]
    )

    const getButtonProps = React.useCallback(
      () => ({
        className: context.slots.button(),
      }),
      [context.slots]
    )

    const getPopoverProps = React.useCallback(
      () => ({
        placement,
        className: context.slots.popover(),
      }),
      [context.slots, placement]
    )

    const getListBoxProps = React.useCallback(
      () => ({
        selectionMode: mode,
        selectionBehavior: behavior,
        className: context.slots.list(),
      }),
      [behavior, context.slots, mode]
    )

    return (
      <SelectContext.Provider value={context}>
        <Component {...getProps()}>
          <Button {...getButtonProps()}>
            <SelectValue className={context.slots.placeholder()} />
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
          </Button>

          <Popover {...getPopoverProps()}>
            <ListBox {...getListBoxProps()}>{children}</ListBox>
          </Popover>
        </Component>
      </SelectContext.Provider>
    )
  }))()

export default Object.assign(Select, {
  Option: SelectOption,
})
