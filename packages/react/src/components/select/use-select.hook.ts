import type { ChangeHandler } from '@/utilities/types'
import type { SelectVariantProps } from '@giantnodes/theme'
import type { Key, SelectProps, SelectionMode } from 'react-aria-components'

import { select } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

export type UseSelectProps<T extends object> = SelectVariantProps &
  Pick<SelectProps<T>, 'onSelectionChange'> & {
    ref?: React.RefObject<HTMLInputElement>
    name?: string
    behavior?: 'toggle' | 'replace'
    mode?: SelectionMode
    onChange?: ChangeHandler
  }

export type UseSelectReturn = ReturnType<typeof useSelect>

export const useSelect = <T extends object>(props: UseSelectProps<T>) => {
  const { ref, name, status, variant, onChange, onSelectionChange } = props

  const slots = React.useMemo(() => select({ status, variant }), [status, variant])

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

export const [SelectContext, useSelectContext] = createContext<UseSelectReturn>({
  name: 'SelectContext',
  strict: true,
  errorMessage: 'useSelectContext: `context` is undefined. Seems you forgot to wrap component within <Select />',
})
