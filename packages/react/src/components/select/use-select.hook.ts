'use client'

import type { SelectVariantProps } from '@giantnodes/theme'
import type { Key, SelectionMode, SelectProps } from 'react-aria-components'
import React from 'react'
import { select } from '@giantnodes/theme'

import type { ChangeHandler } from '~/utilities/types'
import { create } from '~/utilities/create-context'

type UseSelectProps<TElement extends object> = SelectVariantProps &
  Pick<SelectProps<TElement>, 'onSelectionChange'> & {
    ref?: React.RefObject<HTMLInputElement>
    name?: string
    behavior?: 'toggle' | 'replace'
    mode?: SelectionMode
    onChange?: ChangeHandler
  }

type SelectContextType = ReturnType<typeof useSelectValue>

export const useSelectValue = <TElement extends object>(props: UseSelectProps<TElement>) => {
  const { ref, name, size, status, onChange, onSelectionChange } = props

  const slots = React.useMemo(() => select({ size, status }), [size, status])

  const onSelect = (key: Key) => {
    onSelectionChange?.(key)

    if (onChange && typeof onChange === 'function' && ref?.current) {
      const event = {
        target: {
          value: key.toString(),
          name,
        },
      }

      onChange(event)
    }
  }

  return {
    slots,
    onSelect,
  }
}

export const [SelectContext, useSelect] = create<SelectContextType>({
  name: 'SelectContext',
  strict: true,
  errorMessage: 'useSelect: `context` is undefined. Seems you forgot to wrap component within <Select.Root />',
})
